'use client'

import React, { useState } from 'react'
import InputDefault from '../../FormElements/Input/InputDefault'
import DefaultButton from '../../Button/DefaultButton'
import Message from '../../Message/Message'

interface QuoteFormProps {
  onSuccess?: () => void
}

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

const QuoteForm = ({ onSuccess }: QuoteFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    telegram: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{
    open: boolean
    message: string
    severity: 'success' | 'error'
  }>({ open: false, message: '', severity: 'success' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setToast(prev => ({ ...prev, open: false }))

    if (!isValidEmail(formData.email)) {
      setToast({
        open: true,
        message: 'Please enter a valid email address.',
        severity: 'error',
      })
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch('/api/sendTelegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          companyName: formData.company,
          telegramUsername: formData.telegram || undefined,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send')
      }

      setToast({
        open: true,
        message: "Quote request sent! We'll get back to you within 24 hours.",
        severity: 'success',
      })
      setFormData({ name: '', email: '', phone: '', company: '', telegram: '' })
      onSuccess?.()
    } catch (err) {
      setToast({
        open: true,
        message: err instanceof Error ? err.message : 'Something went wrong. Please try again.',
        severity: 'error',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-8 sm:py-10 px-6 sm:px-10 md:px-12 text-white">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-text tracking-wide mb-2">
          Request a consultation
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-text to-transparent mx-auto mb-4" />
        <p className="text-gray-400 text-sm">
          Tell us about your project and we&apos;ll get back to you shortly.
        </p>
        <span className="inline-block mt-3 text-xs text-text/80 bg-text/10 px-3 py-1 rounded-full">
          Typically responds within 24h
        </span>
      </div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6 px-2">
        <InputDefault type="text" value={formData.name} label="Name" name="name" required onChange={handleChange} variant="quote" />
        <InputDefault type="email" value={formData.email} label="Email" name="email" required onChange={handleChange} variant="quote" />
        <InputDefault type="tel" value={formData.phone} label="Phone" name="phone" required onChange={handleChange} variant="quote" />
        <InputDefault type="text" value={formData.company} label="Company Name" name="company" required onChange={handleChange} variant="quote" />
        <InputDefault type="text" value={formData.telegram} label="Telegram Username" name="telegram" onChange={handleChange} variant="quote" />
        <DefaultButton
          text={isSubmitting ? 'Sending...' : 'Request a consultation'}
          type="submit"
          disabled={isSubmitting}
          customClasses="w-full h-12 text-base font-semibold text-white bg-text hover:bg-text/90 rounded-xl mt-2 transition-all duration-200 shadow-lg shadow-[0_4px_20px_-2px_rgba(74,158,255,0.25)] hover:shadow-[0_6px_24px_-2px_rgba(74,158,255,0.35)] disabled:hover:bg-text"
        />
      </form>

      <Message
        message={toast.message}
        severity={toast.severity}
        variant="snackbar"
        open={toast.open}
        onClose={() => setToast(prev => ({ ...prev, open: false }))}
        autoHideDuration={6000}
      />
    </div>
  )
}

export default QuoteForm
