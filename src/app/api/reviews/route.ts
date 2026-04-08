import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

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
  const databaseUrl =
    process.env.DATABASE_URL?.trim() ||
    process.env.POSTGRES_URL?.trim() ||
    process.env.STORAGE_URL?.trim()

  if (!databaseUrl) {
    throw new Error('Missing database URL env var. Set DATABASE_URL (or POSTGRES_URL/STORAGE_URL).')
  }
  return neon(databaseUrl)
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
    if (err instanceof Error && err.message.includes('Missing database URL')) {
      return NextResponse.json({ error: err.message }, { status: 500 })
    }
    return NextResponse.json({ error: 'Failed to fetch reviews.' }, { status: 500 })
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
    if (err instanceof Error && err.message.includes('Missing database URL')) {
      return NextResponse.json({ error: err.message }, { status: 500 })
    }
    return NextResponse.json({ error: 'Failed to save review.' }, { status: 500 })
  }
}
