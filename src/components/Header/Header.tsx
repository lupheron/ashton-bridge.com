'use client'
import React from 'react'
import Image from 'next/image'
import DefaultButton from '../Button/DefaultButton'
import { useQuoteModal } from '../../context/QuoteModalContext'

const sectionIds = {
    home: 'home',
    about: 'about',
    services: 'services',
    contact: 'contact',
} as const

const scrollToSection = (id: (typeof sectionIds)[keyof typeof sectionIds]) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const navLinkClass =
    'relative cursor-pointer border-0 bg-transparent py-2 px-3 text-left text-lg font-medium tracking-wide ' +
    'text-white/85 transition-[color,transform,filter] duration-300 ease-out ' +
    'hover:text-text hover:drop-shadow-[0_0_14px_rgba(74,158,255,0.45)] ' +
    'active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:transform-none ' +
    'focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(7,22,38,0.85)] ' +
    'after:pointer-events-none after:absolute after:bottom-1 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 ' +
    'after:rounded-full after:bg-text after:opacity-0 after:shadow-[0_0_10px_rgba(74,158,255,0.75)] ' +
    'after:transition-[width,opacity] after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] ' +
    'hover:after:w-[calc(100%-0.5rem)] hover:after:opacity-100'

const Header = () => {
    const { openQuote } = useQuoteModal()

    return (
        <div className='w-[80%] mx-auto px-10 font-roboto floating-header'>
            <div className='flex justify-between items-center py-2'>
                <div>
                    <Image src="/ashton-logo.jpg" alt="Logo" width={100} height={100} className='rounded-[50%] w-25 h-23' />
                </div>
                <nav aria-label="Main">
                    <ul className='flex items-center gap-2 md:gap-4'>
                        <li>
                            <button type="button" className={navLinkClass} onClick={() => scrollToSection(sectionIds.home)}>Home</button>
                        </li>
                        <li>
                            <button type="button" className={navLinkClass} onClick={() => scrollToSection(sectionIds.about)}>About</button>
                        </li>
                        <li>
                            <button type="button" className={navLinkClass} onClick={() => scrollToSection(sectionIds.services)}>Services</button>
                        </li>
                        <li>
                            <button type="button" className={navLinkClass} onClick={() => scrollToSection(sectionIds.contact)}>Contact</button>
                        </li>
                    </ul>
                </nav>

                <div className='w-60 flex justify-between items-center gap-2'>
                    <DefaultButton
                        text="Get A Quote"
                        customClasses='w-40 h-12 text-lg text-white border-o rounded-[35px] hover:w-41 hover:h-13 transition-all duration-100'
                        onClick={openQuote} />
                </div>
            </div>
        </div>
    )
}

export default Header