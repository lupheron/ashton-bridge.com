import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='mt-8 sm:mt-12 md:mt-16 lg:mt-24 px-4 sm:px-8 md:px-10 lg:px-12'>
            <div className='flex flex-col items-center text-left sm:items-center sm:text-center gap-8 text-white'>
                <Image src="/ashton-logo-wth-bg.png" alt="Logo" width={100} height={100} className='w-24 sm:w-28 md:w-32 lg:w-36' />

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 w-full max-w-3xl sm:place-items-center'>
                <div className='flex flex-col items-center text-start sm:items-center sm:text-center gap-2 text-base sm:text-lg md:text-xl'>
                    <h2 className='text-gray-500 font-bold text-lg sm:text-xl md:text-2xl tracking-[1px] mb-3 sm:mb-5'>Company</h2>
                    <Link href="#home" className='hover:text-text transition-all duration-300'>Home</Link>
                    <Link href="#about" className='hover:text-text transition-all duration-300'>About</Link>
                    <Link href="/services" className='hover:text-text transition-all duration-300'>Services</Link>
                    <Link href="#howitworks" className='hover:text-text transition-all duration-300'>How It Works?</Link>
                    <Link href="#contact" className='hover:text-text transition-all duration-300'>Contact</Link>
                </div>

                <div className='flex flex-col items-center text-left sm:items-center sm:text-center justify-center gap-2 text-base sm:text-lg md:text-xl'>
                    <h2 className='text-gray-500 font-bold text-lg sm:text-xl md:text-2xl tracking-[1px] mb-3 sm:mb-5'>Legal</h2>
                    <Link href="/privacy-policy" className='hover:text-text transition-all duration-300'>Privacy Policy</Link>
                    <Link href="/terms-service" className='hover:text-text transition-all duration-300'>Terms of Service</Link>
                </div>
                </div>
            </div>

            <hr className='text-gray-700 mt-8 sm:mt-12 md:mt-16 lg:mt-20' />

            <div className='flex items-center justify-center text-gray-500 mt-4 sm:mt-5 pb-2'>
                <p className='text-sm sm:text-base text-center'>© 2026 Ashton-Bridge. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer