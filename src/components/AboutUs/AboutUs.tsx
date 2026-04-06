import React from 'react'

const aboutUsData = [
    {
        title: "Our Mission",
        description: "To simplify and accelerate how drivers find work and how companies build their teams — making logistics more efficient for everyone involved.",
    },
    {
        title: "Our Vision",
        description: "To become the most trusted all-in-one platform for logistics businesses and professionals across the globe.",
    },
    {
        title: "Our Values",
        description: "Transparency, reliability, and growth. We believe every driver and every company deserves a partner they can count on.",
    },
]

const AboutUs = () => {
    return (
        <div id="about" className='w-[95%] sm:w-[90%] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 mt-16 sm:mt-24 md:mt-36 lg:mt-48 flex flex-col lg:flex-row items-start gap-8 lg:gap-16 xl:gap-24 bg-tertiary rounded-[35px] shadow-[0_0_40px_rgba(74,158,255,0.15)] scroll-mt-28'>
            <div className='flex flex-col items-start justify-center gap-5 flex-1'>
                <button className='text-text border border-text tracking-[3px] bg-secondary/50 rounded-[35px] py-1 px-3 text-sm'>WHO WE ARE</button>
                <h1 className='text-white text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-bold'>Built on quality. Focused on results.</h1>
                <p className='text-gray-500 text-base sm:text-lg md:text-xl mt-3 sm:mt-5 leading-7 sm:leading-8 md:leading-[40px]'>Ashton-Bridge was built with one standard in mind — excellence. We believe logistics companies deserve more than generic tools and slow processes. Every service we deliver is crafted with precision, backed by industry knowledge, and held to a high bar of quality.</p>
                <p className='text-gray-500 text-base sm:text-lg md:text-xl mt-5 sm:mt-8 md:mt-10 leading-7 sm:leading-8 md:leading-[40px]'>We currently offer two focused services: a results-driven SMM targeting service that helps logistics brands attract clients, drivers, and partners through targeted digital campaigns across Facebook, Instagram, LinkedIn, and more — and a professional HR recruiting solution that connects companies with the right people fast.</p>
            </div>

            <div className='flex flex-col items-stretch w-full lg:w-auto lg:flex-shrink-0'>
                {aboutUsData.map((item, index) => (
                    <div key={index} className='w-full lg:w-96 xl:w-110 min-h-36 lg:h-55 flex flex-col justify-center px-6 sm:px-8 lg:px-10 py-5 gap-3 sm:gap-5 mt-4 sm:mt-5 bg-primary border border-blue-900 rounded-[35px]'>
                        <h2 className='text-white text-lg sm:text-xl font-bold'>{item.title}</h2>
                        <p className='text-gray-500 text-sm sm:text-base'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutUs