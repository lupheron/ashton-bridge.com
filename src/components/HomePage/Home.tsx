'use client'
import React from 'react'
import Link from 'next/link'
import DefaultButton from '../Button/DefaultButton'
import { useQuoteModal } from '../../context/QuoteModalContext'

const Home = () => {
    const { openQuote } = useQuoteModal()

    return (
        <div id="home" className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center justify-center gap-5 sm:gap-7 text-center scroll-mt-28'>
            <DefaultButton text="Simplify your workflow" customClasses='w-52 sm:w-60 h-10 sm:h-12 text-sm sm:text-base rounded-[35px] liquid-button' />
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[80px] font-bold text-white leading-tight'>Where <span className='text-text'>Logistics</span> Meets <br className='hidden sm:block' /> Digital Growth</h1>

            <p className='w-full max-w-xl md:max-w-2xl lg:max-w-3xl text-base sm:text-lg md:text-[20px] text-gray-500'>Ashton-Bridge connects truck drivers, freight companies, and IT solutions under one unified platform — built for the modern marketplace.</p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto'>
                <DefaultButton text="Get Started" customClasses='w-full sm:w-40 bg-text text-white rounded-[35px]' onClick={openQuote} />
                <Link href="/services" className='inline-flex items-center justify-center w-full sm:w-40 h-12 rounded-[35px] bg-transparent text-text border border-text text-base font-medium hover:bg-text/10 transition-all duration-300'>
                    Explore Services
                </Link>
            </div>
            <div className='hidden w-300 h-120 rounded-[35px] flex items-center justify-center bg-gradient-to-r from-secondary/40 to-primary liquid-button mt-20'>
                <h1 className='text-2xl font-bold text-white'>COMING SOON</h1>
            </div>
        </div>
    )
}

export default Home