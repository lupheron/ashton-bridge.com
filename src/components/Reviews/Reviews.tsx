'use client'

import React, { useEffect, useMemo, useState } from 'react'
import CommentCard from '../Cards/CommentCard'
import InfiniteSwiper from '../Swiper/Swiper'
import { type ReviewItem } from '../Forms/ReviewForm/ReviewForm'

const baseReviews: ReviewItem[] = [
    {
        name: "Tohir.A",
        role: "Fleet Owner",
        review: "Their SMM campaigns brought us better driver leads in the first month. We finally stopped wasting budget on broad ads and started getting people that match our lanes.",
        rating: 5
    },
    {
        name: "John D.",
        role: "Recruiting Coordinator",
        review: "Ashton-Bridge helped us structure our Facebook and Instagram ads around real hiring goals. The lead quality improved, and our team now spends less time filtering unqualified applicants.",
        rating: 5
    },
    {
        name: "Jane S.",
        role: "Logistics Manager",
        review: "Thank you to the Ashton-Bridge team for improving our social media targeting. Results were consistent and communication was clear, though we still want to test a few more ad creatives.",
        rating: 4
    }
]

type ReviewsProps = {
    refreshSignal?: number
}

const Reviews = ({ refreshSignal = 0 }: ReviewsProps) => {
    const [dbReviews, setDbReviews] = useState<ReviewItem[]>([])

    useEffect(() => {
        const loadReviews = async () => {
            try {
                const res = await fetch('/api/reviews', { cache: 'no-store' })
                if (!res.ok) return
                const data = await res.json()
                if (Array.isArray(data.reviews)) {
                    setDbReviews(data.reviews as ReviewItem[])
                }
            } catch (err) {
                console.error('Failed to load reviews:', err)
            }
        }
        void loadReviews()
    }, [refreshSignal])

    const mergedReviews = useMemo(() => [...dbReviews, ...baseReviews], [dbReviews])

    return (
        <div className='mt-8 sm:mt-10 px-4 sm:px-8 md:px-10 lg:px-12'>
            <div className='mb-8 sm:mb-12 md:mb-16 text-center sm:text-left'>
                <h4 className='text-text font-bold tracking-wider uppercase text-sm mb-2'>TESTIMONIALS</h4>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold text-white leading-tight'>Trusted by drivers and <br className='hidden sm:block' /> companies alike</h1>
                <p className='text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base'>Real people. Real results. Here&apos;s what our community is saying about Ashton-Bridge.</p>
            </div>
            <div className='px-2 sm:px-6 md:px-10 overflow-hidden'>
                <InfiniteSwiper>
                    {[...mergedReviews, ...mergedReviews, ...mergedReviews].map((rev, index) => (
                        <CommentCard
                            key={`${rev.name}-${index}`}
                            writer={rev.name}
                            company_name={rev.role}
                            review={rev.review}
                            rating={rev.rating}
                        />
                    ))}
                </InfiniteSwiper>
            </div>
        </div>
    )
}

export default Reviews