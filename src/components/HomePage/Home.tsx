'use client'
import React from 'react'
import DefaultButton from '../Button/DefaultButton'
import { useQuoteModal } from '../../context/QuoteModalContext'

const Home = () => {
    const { openQuote } = useQuoteModal()

    const scrollToServices = () => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div id="home" className='px-70 flex flex-col items-center justify-center gap-7 text-center scroll-mt-28'>
            <DefaultButton text="Simplify your workflow" customClasses='w-60 h-12 rounded-[35px] liquid-button' />
            <h1 className='text-[80px] font-bold text-white'>Where <span className='text-text'>Logistics</span>  Meets <br /> Digital Growth </h1>

            <p className='w-200 text-[20px] text-gray-500'>Ashton-Bridge connects truck drivers, freight companies, and IT solutions under one unified platform — built for the modern marketplace.</p>
            <div className='flex items-center justify-center gap-5'>
                <DefaultButton text="Get Started" customClasses='w-40 bg-text text-white rounded-[35px]' onClick={openQuote} />
                <DefaultButton text="Explore Services" customClasses='w-40 bg-transparent text-text border border-text rounded-[35px]' onClick={scrollToServices} />
            </div>
            <div className='hidden w-300 h-120 rounded-[35px] flex items-center justify-center bg-gradient-to-r from-secondary/40 to-primary liquid-button mt-20'>
                <h1 className='text-2xl font-bold text-white'>COMING SOON</h1>
            </div>
        </div>
    )
}

export default Home