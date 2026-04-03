import React from 'react'
import Link from 'next/link'

type OfferCard = {
    title: string
    description: string
    className: string
    backgroundImage?: string
    isComingSoon?: boolean
    comingSoonOnHover?: boolean
    learnMoreHref?: string
}

const Offer = () => {
    const cards: OfferCard[] = [
        {
            backgroundImage: "/images/grid-container/target.png",
            title: "SMM & Targeted Advertising",
            description: "Grow your company's online presence with data-driven social media campaigns. We handle audience targeting, ad creation, and performance tracking across Facebook, Instagram, LinkedIn, and more.",
            className: "col-span-3 h-[400px]",
            learnMoreHref: "/services/smm",
        },
        {
            backgroundImage: "/images/grid-container/company-staffing.png",
            title: "Company Staffing",
            description: "Freight and logistics companies can post openings and browse a qualified pool of drivers. Fill your fleet faster with Ashton-Bridge's smart matching system",
            className: "col-span-1 row-span-2 h-full",
            comingSoonOnHover: true,
        },
        {
            backgroundImage: "/images/grid-container/direct-match.png",
            title: "Direct Match & Hire",
            description: "No middlemen. Companies reach out directly to drivers and vice versa. Our smart matching surfaces the best fits based on location, route type, and requirements.",
            className: "col-span-1 h-[400px]",
            comingSoonOnHover: true,
        },
        {
            backgroundImage: "/images/grid-container/verified-driver.jpg",
            title: "Verified Driver Profiles",
            description: "Every driver on Ashton-Bridge goes through a profile verification process. Companies can browse CDL classes, experience history, and availability — all in one place.",
            className: "col-span-2 h-[400px]",
            comingSoonOnHover: true,
        },
        {
            title: "More coming soon",
            description: "We are constantly working on new features to help your business grow.",
            className: "col-span-4 h-[120px] bg-gradient-to-r from-secondary/40 to-primary liquid-button border-none",
            isComingSoon: true
        }
    ]

    return (
        <div id="services" className='px-50 scroll-mt-28'>
            <div className='flex justify-between items-end mb-15'>
                <div className='flex flex-col'>
                    <h4 className='text-text font-bold tracking-wider uppercase text-sm mb-2'>WHAT WE OFFER</h4>
                    <h1 className='text-[50px] font-bold text-white leading-tight'>Everything your business <br /> needs, under one roof</h1>
                </div>
                <p className='text-gray-500 text-lg w-130 mb-2'>From staffing truck drivers to building your next website — Ashton-Bridge handles it all.</p>
            </div>

            <div className='grid grid-cols-4 gap-6'>
                {cards.map((card, index) => {
                    const shellClass = `${card.className} rounded-[40px] p-10 flex flex-col justify-end relative overflow-hidden group ${card.learnMoreHref ? 'cursor-pointer' : 'cursor-default'} transition-all duration-500`
                    const bgStyle = card.backgroundImage
                        ? {
                              backgroundImage: `url(${card.backgroundImage})`,
                              backgroundSize: 'cover' as const,
                              backgroundPosition: 'center' as const,
                          }
                        : undefined

                    const body = (
                        <>
                            {card.backgroundImage && (
                                <div
                                    className={`absolute inset-0 bg-black/55 rounded-[40px] ${card.comingSoonOnHover ? 'group-hover:opacity-0 transition-opacity duration-300' : ''}`}
                                />
                            )}

                            <div
                                className={`absolute -top-20 -right-20 w-60 h-60 bg-text/10 blur-[100px] rounded-full group-hover:bg-text/20 transition-all duration-500 ${card.comingSoonOnHover ? 'group-hover:opacity-0' : ''}`}
                            />

                            {card.comingSoonOnHover && (
                                <div
                                    className="absolute inset-0 z-20 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 liquid-button flex items-center justify-center pointer-events-none"
                                    style={{ border: 'none', outline: 'none' }}
                                >
                                    <span className="text-2xl md:text-3xl font-bold text-white tracking-wide">Coming soon</span>
                                </div>
                            )}

                            {!card.isComingSoon ? (
                                <div
                                    className={`relative z-10 ${card.comingSoonOnHover ? 'group-hover:opacity-0 transition-opacity duration-300' : ''}`}
                                >
                                    <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed max-w-[80%]">{card.description}</p>
                                    {card.learnMoreHref && (
                                        <span className="mt-4 inline-block text-text text-sm font-semibold tracking-wide">
                                            Learn more →
                                        </span>
                                    )}
                                </div>
                            ) : (
                                <div className="flex justify-between items-center w-full relative z-10">
                                    <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                                    <p className="text-gray-400 text-sm italic">{card.description}</p>
                                </div>
                            )}
                        </>
                    )

                    if (card.learnMoreHref) {
                        return (
                            <Link key={index} href={card.learnMoreHref} className={shellClass} style={bgStyle}>
                                {body}
                            </Link>
                        )
                    }

                    return (
                        <div key={index} className={shellClass} style={bgStyle}>
                            {body}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Offer