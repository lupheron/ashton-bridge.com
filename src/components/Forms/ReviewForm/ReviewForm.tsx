'use client'

import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import Message from '../../Message/Message'

export type ReviewItem = {
  id?: number
  name: string
  role: string
  review: string
  rating: number
  created_at?: string
}

type ReviewFormProps = {
  onSubmitReview: (review: ReviewItem) => Promise<{ ok: boolean; error?: string }>
}

const inputBase =
  'w-full h-11 rounded-xl border border-white/10 bg-primary px-4 text-white outline-none ' +
  'placeholder:text-gray-500 focus:border-text/40 focus:shadow-[0_0_0_3px_rgba(74,158,255,0.15)] transition-all duration-200'

const ReviewForm = ({ onSubmitReview }: ReviewFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    review: '',
  })
  const [rating, setRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{
    open: boolean
    message: string
    severity: 'success' | 'error'
  }>({ open: false, message: '', severity: 'success' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const cleanName = formData.name.trim()
    const cleanRole = formData.role.trim()
    const cleanReview = formData.review.trim()

    if (!cleanName || !cleanRole || !cleanReview) {
      setToast({ open: true, message: 'Please fill all fields before submitting.', severity: 'error' })
      return
    }

    if (cleanReview.length < 25) {
      setToast({ open: true, message: 'Please write a review with at least 25 characters.', severity: 'error' })
      return
    }

    setIsSubmitting(true)
    const result = await onSubmitReview({
      name: cleanName,
      role: cleanRole,
      review: cleanReview,
      rating,
    })

    if (!result.ok) {
      setToast({
        open: true,
        message: result.error || 'Could not save your review. Please try again.',
        severity: 'error',
      })
      setIsSubmitting(false)
      return
    }

    setFormData({ name: '', role: '', review: '' })
    setRating(5)
    setToast({ open: true, message: 'Thank you! Your review was added.', severity: 'success' })
    setIsSubmitting(false)
  }

  return (
    <div className="mt-12 sm:mt-14 md:mt-16">
      <div className="max-w-3xl mx-auto rounded-[35px] border border-white/10 bg-secondary/80 px-5 sm:px-8 md:px-10 py-7 sm:py-9 shadow-[0_0_30px_rgba(74,158,255,0.08)]">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-white text-2xl sm:text-3xl font-bold leading-tight">Share your experience</h3>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Your feedback helps other drivers and companies trust Ashton-Bridge.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-gray-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={inputBase}
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="role" className="text-sm text-gray-300">
                Role / Position
              </label>
              <input
                id="role"
                name="role"
                type="text"
                value={formData.role}
                onChange={handleChange}
                className={inputBase}
                placeholder="Driver, Logistics Manager, Owner..."
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="review" className="text-sm text-gray-300">
              Review
            </label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              className={`${inputBase} h-30 resize-none py-3`}
              placeholder="Tell people about your experience with Ashton-Bridge..."
            />
          </div>

          <div className="flex flex-col items-start gap-2">
            <span className="text-sm text-gray-300">Rating</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map(star => {
                const active = (hoverRating || rating) >= star
                return (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                    className="cursor-pointer transition-transform duration-150 hover:scale-110"
                    aria-label={`Set rating to ${star} star${star > 1 ? 's' : ''}`}
                  >
                    {active ? (
                      <StarIcon className="text-yellow-500" />
                    ) : (
                      <StarBorderIcon className="text-gray-500" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 rounded-[35px] bg-text text-white font-semibold hover:bg-text/90 transition-all duration-200 shadow-lg shadow-text/20 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit review'}
          </button>
        </form>
      </div>

      <Message
        message={toast.message}
        severity={toast.severity}
        variant="snackbar"
        open={toast.open}
        onClose={() => setToast(prev => ({ ...prev, open: false }))}
        autoHideDuration={4500}
      />
    </div>
  )
}

export default ReviewForm