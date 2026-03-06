import React from 'react'
import CommentCard from '../Cards/CommentCard'
import InfiniteSwiper from '../Swiper/Swiper'

const reviews = [
    {
        name: "Roberto P.",
        role: "Independent Trucker",
        review: "The mechanic referral service got my truck repaired quickly and at a fair price. No more random searching online.",
        rating: 5
    },
    {
        name: "John D.",
        role: "Driver",
        review: "I found my dream job through Ashton-Bridge. The platform is easy to use and the jobs are legitimate.",
        rating: 5
    },
    {
        name: "Jane S.",
        role: "Logistics Manager",
        review: "Ashton-Bridge has helped us find the best drivers for our company. The platform is reliable and the jobs are legitimate.",
        rating: 5
    }
]

const Reviews = () => {
    return (
        <div className='mt-10 px-50'>
            <div className=' mb-16'>
                <h4 className='text-text font-bold tracking-wider uppercase text-sm mb-2'>TESTIMONIALS</h4>
                <h1 className='text-[45px] font-bold text-white leading-tight'>Trusted by drivers and <br /> companies alike</h1>
                <p className='text-gray-400 mt-4'>Real people. Real results. Here's what our community is saying about Ashton-Bridge.</p>
            </div>
            <div className='px-10 overflow-hidden'>
                <InfiniteSwiper>
                    {[...reviews, ...reviews, ...reviews].map((rev, index) => (
                        <CommentCard
                            key={index}
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