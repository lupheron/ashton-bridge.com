import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_API = 'https://api.telegram.org/bot'

interface TelegramPayload {
  name: string
  email: string
  phone: string
  companyName: string
  telegramUsername?: string
}

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

function formatMessage(data: TelegramPayload): string {
  const lines = [
    '📋 *New Quote Request*',
    '',
    `*Name:* ${data.name}`,
    `*Email:* ${data.email}`,
    `*Phone:* ${data.phone}`,
    `*Company:* ${data.companyName}`,
    `*Telegram:* ${data.telegramUsername || 'Not provided'}`,
  ]
  return lines.join('\n')
}

export async function POST(request: NextRequest) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      return NextResponse.json(
        { error: 'Telegram configuration missing' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, phone, companyName, telegramUsername } = body as TelegramPayload

    if (!name || !email || !phone || !companyName) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, companyName' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const text = formatMessage({
      name,
      email,
      phone,
      companyName,
      telegramUsername,
    })

    const res = await fetch(`${TELEGRAM_API}${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'Markdown',
      }),
    })

    const data = await res.json()

    if (!data.ok) {
      console.error('Telegram API error:', data)
      return NextResponse.json(
        { error: data.description || 'Failed to send to Telegram' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('sendTelegram error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
