import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  'https://joxdlaqotlckqvibpqnl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpveGRsYXFvdGxja3F2aWJwcW5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5MDMwODUsImV4cCI6MjA4OTQ3OTA4NX0.f117BI4D0UK2WJlJ5bXLGWcvuNSnnmbe3NydhgSHGiQ'
)

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json()

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // Check for duplicate email
    const { data: existing } = await supabase
      .from('promo_signups')
      .select('email')
      .eq('email', email.toLowerCase().trim())
      .single()

    if (existing) {
      return NextResponse.json(
        { error: 'This email has already been registered. Check your inbox for your promo code!' },
        { status: 409 }
      )
    }

    // Insert signup into Supabase
    const { error } = await supabase
      .from('promo_signups')
      .insert({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        signed_up_at: new Date().toISOString(),
      })

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Something went wrong. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Promo signup error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
