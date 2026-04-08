import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

export const runtime = 'nodejs'

type ReviewRow = {
  id: number | string
  name: string
  role: string
  review: string
  rating: number
  created_at: string
}

type CreateReviewPayload = {
  name: string
  role: string
  review: string
  rating: number
}

const MAX_REVIEW_CHARS = 100

function getSql() {
  // Prefer Neon/Vercel integration vars first, then project-level fallbacks.
  const rawDatabaseUrl =
    process.env.STORAGE_POSTGRES_URL?.trim() ||
    process.env.STORAGE_DATABASE_URL_UNPOOLED?.trim() ||
    process.env.STORAGE_POSTGRES_PRISMA_URL?.trim() ||
    process.env.STORAGE_URL?.trim() ||
    process.env.DATABASE_URL?.trim() ||
    process.env.DATABASE_URL_UNPOOLED?.trim() ||
    process.env.POSTGRES_URL?.trim() ||
    process.env.POSTGRES_URL_NON_POOLING?.trim() ||
    process.env.POSTGRES_PRISMA_URL?.trim()

  if (!rawDatabaseUrl) {
    throw new Error('Missing database URL env var. Set DATABASE_URL (or POSTGRES_URL/STORAGE_URL).')
  }

  // Some dashboards save connection URLs as //host/... (without protocol).
  const normalizedUrl = rawDatabaseUrl.startsWith('//')
    ? `postgresql:${rawDatabaseUrl}`
    : rawDatabaseUrl

  try {
    // Validate shape early to return a clean API error.
    // eslint-disable-next-line no-new
    new URL(normalizedUrl)
  } catch {
    throw new Error(`Database URL is invalid: ${rawDatabaseUrl}`)
  }

  return neon(normalizedUrl)
}

async function ensureReviewsTable() {
  const sql = getSql()
  await sql`
    CREATE TABLE IF NOT EXISTS reviews (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      review TEXT NOT NULL,
      rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `
}

function validatePayload(payload: Partial<CreateReviewPayload>) {
  const name = payload.name?.trim() ?? ''
  const role = payload.role?.trim() ?? ''
  const review = payload.review?.trim() ?? ''
  const rating = Number(payload.rating)

  if (!name || !role || !review) {
    return { ok: false as const, error: 'Missing required fields: name, role, review.' }
  }

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return { ok: false as const, error: 'Rating must be an integer between 1 and 5.' }
  }

  if (review.length > MAX_REVIEW_CHARS) {
    return { ok: false as const, error: `Review must be ${MAX_REVIEW_CHARS} characters or less.` }
  }

  return {
    ok: true as const,
    value: {
      name,
      role,
      review,
      rating,
    },
  }
}

export async function GET() {
  try {
    await ensureReviewsTable()
    const sql = getSql()

    const rows = (await sql`
      SELECT id, name, role, review, rating, created_at
      FROM reviews
      ORDER BY created_at DESC
      LIMIT 100
    `) as ReviewRow[]

    return NextResponse.json({ reviews: rows })
  } catch (err) {
    console.error('GET /api/reviews error:', err)
    const message = err instanceof Error ? err.message : 'Failed to fetch reviews.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureReviewsTable()
    const payload = (await request.json()) as Partial<CreateReviewPayload>
    const parsed = validatePayload(payload)

    if (!parsed.ok) {
      return NextResponse.json({ error: parsed.error }, { status: 400 })
    }

    const sql = getSql()
    const insertedRows = (await sql`
      INSERT INTO reviews (name, role, review, rating)
      VALUES (${parsed.value.name}, ${parsed.value.role}, ${parsed.value.review}, ${parsed.value.rating})
      RETURNING id, name, role, review, rating, created_at
    `) as ReviewRow[]
    const [inserted] = insertedRows

    return NextResponse.json({ review: inserted }, { status: 201 })
  } catch (err) {
    console.error('POST /api/reviews error:', err)
    const message = err instanceof Error ? err.message : 'Failed to save review.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
