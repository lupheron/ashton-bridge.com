'use client'

import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const faqItems = [
  {
    question: 'What services does Ashton-Bridge currently provide?',
    answer:
      'We currently provide SMM targeting with HR system management, plus HR recruiting and staffing support for logistics companies.',
  },
  {
    question: 'Is the HR recruiting and staffing service available now?',
    answer:
      'It is currently marked as coming soon. You can still contact us to join the early list and get updates when onboarding opens.',
  },
  {
    question: 'Which social platforms do you manage for campaigns?',
    answer:
      'Our SMM service supports major channels like Facebook, Instagram, and LinkedIn with audience targeting, ad creatives, and campaign optimization.',
  },
  {
    question: 'Can you help us attract both drivers and freight leads?',
    answer:
      'Yes. We design campaign strategies around your goals, whether you are hiring drivers, promoting logistics services, or improving brand visibility.',
  },
  {
    question: 'How do we start working with Ashton-Bridge?',
    answer:
      'Use the contact section or request a consultation. We review your goals, propose a plan, and then launch with clear milestones and reporting.',
  },
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <div id="faq" className='px-4 sm:px-8 md:px-10 lg:px-12 mt-16 sm:mt-24 md:mt-32 lg:mt-40 scroll-mt-28'>
        <div className='text-white rounded-[35px] py-10 sm:py-14 md:py-16 lg:py-20 px-6 sm:px-10 md:px-14 lg:px-20'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center'>Frequently Asked Questions</h1>
            <p className='mt-4 sm:mt-5 text-center text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto'>
                Quick answers about our logistics-focused SMM and staffing services.
            </p>
        </div>

        <div className='flex flex-col gap-4 sm:gap-5 mt-8 sm:mt-12 md:mt-16 lg:mt-20 max-w-5xl mx-auto'>
            {faqItems.map((item, index) => {
                const isOpen = openIndex === index

                return (
                <article
                    key={item.question}
                    className='rounded-[28px] border border-white/10 p-4 sm:p-5 md:p-6'
                >
                    <button
                        type='button'
                        onClick={() => toggleItem(index)}
                        className='w-full flex items-center justify-between gap-4 text-left cursor-pointer'
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                    >
                        <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug'>
                            {item.question}
                        </h2>
                        <KeyboardArrowDownIcon
                            className={`shrink-0 text-text transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        />
                    </button>

                    <div
                        id={`faq-answer-${index}`}
                        className={`grid transition-all duration-200 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3 sm:mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                    >
                        <p className='overflow-hidden text-gray-400 text-sm sm:text-base leading-relaxed'>
                            {item.answer}
                        </p>
                    </div>
                </article>
                )
            })}
        </div>
    </div>
  )
}

export default Faq