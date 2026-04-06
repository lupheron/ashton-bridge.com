'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import DefaultButton from '../Button/DefaultButton'
import { useQuoteModal } from '../../context/QuoteModalContext'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

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

const mobileNavItem =
  'block w-full text-left text-white/85 hover:text-text py-3 px-4 text-lg font-medium tracking-wide border-b border-white/10 ' +
  'transition-[opacity,transform,color] duration-300 ease-out'
const mobileNavItemActive =
  'block w-full text-left text-text py-3 px-4 text-lg font-medium tracking-wide border-b border-white/10 ' +
  'transition-[opacity,transform] duration-300 ease-out'

const Header = () => {
  const { openQuote } = useQuoteModal()
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isServicesRoute = pathname === '/services' || pathname.startsWith('/services/')
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleSectionClick = (id: (typeof sectionIds)[keyof typeof sectionIds]) => {
    closeMenu()
    scrollToSection(id)
  }

  const handleQuoteClick = () => {
    closeMenu()
    openQuote()
  }

  return (
    <div className="w-[95%] sm:w-[90%] lg:w-[84%] xl:w-[80%] mx-auto font-roboto floating-header">
      <div className="flex justify-between items-center py-2">
        {/* Logo */}
        <div>
          {isHome ? (
            <button
              type="button"
              onClick={() => scrollToSection(sectionIds.home)}
              className="cursor-pointer border-0 bg-transparent p-0"
              aria-label="Ashton-Bridge home"
            >
              <Image src="/ashton-logo.jpg" alt="" width={100} height={100} className="rounded-[50%] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20" />
            </button>
          ) : (
            <Link href="/" className="inline-block" aria-label="Ashton-Bridge home">
              <Image src="/ashton-logo.jpg" alt="" width={100} height={100} className="rounded-[50%] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20" />
            </Link>
          )}
        </div>

        {/* Desktop Nav */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-4">
            <li>
              {isHome ? (
                <button type="button" className={navInactive} onClick={() => scrollToSection(sectionIds.home)}>
                  Home
                </button>
              ) : (
                <Link href="/#home" className={hashLinkClass}>Home</Link>
              )}
            </li>
            <li>
              {isHome ? (
                <button type="button" className={navInactive} onClick={() => scrollToSection(sectionIds.about)}>
                  About
                </button>
              ) : (
                <Link href="/#about" className={hashLinkClass}>About</Link>
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
                <Link href="/#contact" className={hashLinkClass}>Contact</Link>
              )}
            </li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex justify-end items-center gap-2 shrink-0">
          <DefaultButton
            text="Request a consultation"
            customClasses="whitespace-nowrap h-10 xl:h-12 px-3 xl:px-5 text-sm xl:text-base text-white border-0 rounded-[35px] hover:brightness-110 transition-all duration-200"
            onClick={openQuote}
          />
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="lg:hidden text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon style={{ fontSize: 26 }} /> : <MenuIcon style={{ fontSize: 26 }} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <nav
        aria-label="Mobile menu"
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? 'max-h-[520px] opacity-100 translate-y-0 pt-2 pb-4' : 'max-h-0 opacity-0 -translate-y-2 pt-0 pb-0'
        }`}
      >
        <ul className="flex flex-col">
          {[
            {
              key: 'home',
              node: isHome ? (
                <button type="button" className={mobileNavItem} onClick={() => handleSectionClick(sectionIds.home)}>
                  Home
                </button>
              ) : (
                <Link href="/#home" className={mobileNavItem} onClick={closeMenu}>
                  Home
                </Link>
              ),
            },
            {
              key: 'about',
              node: isHome ? (
                <button type="button" className={mobileNavItem} onClick={() => handleSectionClick(sectionIds.about)}>
                  About
                </button>
              ) : (
                <Link href="/#about" className={mobileNavItem} onClick={closeMenu}>
                  About
                </Link>
              ),
            },
            {
              key: 'services',
              node: (
                <Link href="/services" className={isServicesRoute ? mobileNavItemActive : mobileNavItem} onClick={closeMenu}>
                  Services
                </Link>
              ),
            },
            {
              key: 'contact',
              node: isHome ? (
                <button type="button" className={mobileNavItem} onClick={() => handleSectionClick(sectionIds.contact)}>
                  Contact
                </button>
              ) : (
                <Link href="/#contact" className={mobileNavItem} onClick={closeMenu}>
                  Contact
                </Link>
              ),
            },
          ].map((item, index) => (
            <li key={item.key}>
              {React.cloneElement(item.node, {
                style: {
                  transitionDelay: menuOpen ? `${90 + index * 60}ms` : '0ms',
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
                },
              })}
            </li>
          ))}
        </ul>
        <div
          className="mt-4 px-2 transition-[opacity,transform] duration-300 ease-out"
          style={{
            transitionDelay: menuOpen ? '320ms' : '0ms',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          }}
        >
          <DefaultButton
            text="Request a consultation"
            customClasses="w-full h-12 text-base text-white border-0 rounded-[35px] hover:brightness-110 transition-all duration-200"
            onClick={handleQuoteClick}
          />
        </div>
      </nav>
    </div>
  )
}

export default Header
