import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='mt-30 px-50'>
        <div className='flex items-start justify-between text-white'>
            <Image src="/ashton-logo-wth-bg.png" alt="Logo" width={100} height={100} className='w-40'/>

            <div className='flex flex-col items-start gap-2 text-xl'>
                <h2 className='text-gray-500 font-bold text-2xl tracking-[1px] mb-5'>Company</h2>
                <Link href="#home" className='hover:text-text transition-all duration-300'>Home</Link>
                <Link href="#about" className='hover:text-text transition-all duration-300'>About</Link>
                <Link href="#howitworks" className='hover:text-text transition-all duration-300'>How It Works?</Link>
                <Link href="#contact" className='hover:text-text transition-all duration-300'>Contact</Link>
            </div>

            <div className='flex flex-col items-center justify-center gap-2 text-xl'>
                <h2 className='text-gray-500 font-bold text-2xl tracking-[1px] mb-5'>Legal</h2>
                <Link href="/" className='hover:text-text transition-all duration-300'>Privacy Policy</Link>
                <Link href="/" className='hover:text-text transition-all duration-300'>Terms of Service</Link>
            </div>
        </div>

        <hr className='bg-white text-gray-500 mt-30'/>

        <div className='flex items-center justify-center text-gray-500 mt-5'>
            <p>© 2026 Ashton-Bridge. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer