'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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

const navBase =
  'relative border-0 bg-transparent py-2 px-3 text-left text-lg font-medium tracking-wide ' +
  'transition-[color,transform,filter] duration-300 ease-out ' +
  'active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:transform-none ' +
  'focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(7,22,38,0.85)] ' +
  'after:pointer-events-none after:absolute after:bottom-1 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 ' +
  'after:rounded-full after:bg-text after:opacity-0 after:shadow-[0_0_10px_rgba(74,158,255,0.75)] ' +
  'after:transition-[width,opacity] after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)]'

const navInactive =
  navBase +
  ' cursor-pointer text-white/85 hover:text-text hover:drop-shadow-[0_0_14px_rgba(74,158,255,0.45)] ' +
  'hover:after:w-[calc(100%-0.5rem)] hover:after:opacity-100'

const navActive =
  navBase +
  ' cursor-pointer text-text drop-shadow-[0_0_12px_rgba(74,158,255,0.35)] ' +
  'after:w-[calc(100%-0.5rem)] after:opacity-100'

const hashLinkClass = navInactive + ' inline-block no-underline'

const Header = () => {
  const { openQuote } = useQuoteModal()
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isServicesRoute = pathname === '/services' || pathname.startsWith('/services/')

  return (
    <div className="w-[80%] mx-auto px-10 font-roboto floating-header">
      <div className="flex justify-between items-center py-2">
        <div>
          {isHome ? (
            <button
              type="button"
              onClick={() => scrollToSection(sectionIds.home)}
              className="cursor-pointer border-0 bg-transparent p-0"
              aria-label="Ashton-Bridge home"
            >
              <Image src="/ashton-logo.jpg" alt="" width={100} height={100} className="rounded-[50%] w-25 h-23" />
            </button>
          ) : (
            <Link href="/" className="inline-block" aria-label="Ashton-Bridge home">
              <Image src="/ashton-logo.jpg" alt="" width={100} height={100} className="rounded-[50%] w-25 h-23" />
            </Link>
          )}
        </div>
        <nav aria-label="Main">
          <ul className="flex items-center gap-2 md:gap-4">
            <li>
              {isHome ? (
                <button type="button" className={navInactive} onClick={() => scrollToSection(sectionIds.home)}>
                  Home
                </button>
              ) : (
                <Link href="/#home" className={hashLinkClass}>
                  Home
                </Link>
              )}
            </li>
            <li>
              {isHome ? (
                <button type="button" className={navInactive} onClick={() => scrollToSection(sectionIds.about)}>
                  About
                </button>
              ) : (
                <Link href="/#about" className={hashLinkClass}>
                  About
                </Link>
              )}
            </li>
            <li>
              <Link href="/services" className={isServicesRoute ? navActive : hashLinkClass}>
                Services
              </Link>
            </li>
            <li>
              {isHome ? (
                <button type="button" className={navInactive} onClick={() => scrollToSection(sectionIds.contact)}>
                  Contact
                </button>
              ) : (
                <Link href="/#contact" className={hashLinkClass}>
                  Contact
                </Link>
              )}
            </li>
          </ul>
        </nav>

        <div className="min-w-[14rem] flex justify-end items-center gap-2 shrink-0">
          <DefaultButton
            text="Request a consultation"
            customClasses="whitespace-nowrap h-12 px-5 text-base text-white border-o rounded-[35px] hover:brightness-110 transition-all duration-200"
            onClick={openQuote}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
