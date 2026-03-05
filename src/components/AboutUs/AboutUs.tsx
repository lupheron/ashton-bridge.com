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
        <div className='w-[80%] mx-auto px-20 py-10 mt-48 flex items-start gap-40 bg-tertiary border border-blue-900 rounded-[35px]'>
            <div className='flex flex-col items-start justify-center gap-5'>
                <button className='text-text border borer-text tracking-[3px] bg-secondary/50 rounded-[35px] py-1 px-3 text-sm'>WHO WE ARE</button>
                <h1 className='text-white text-[40px] font-bold'>Built to bridge the gap between drivers and opportunity</h1>
                <p className='text-gray-500 text-xl mt-5 leading-[40px]'>Ashton-Bridge was founded with a simple belief — that the logistics industry deserves a smarter, more connected way to operate. Too many qualified drivers struggle to find stable work. Too many companies waste weeks searching for the right people. We set out to fix that</p>
                <p className='text-gray-500 text-xl mt-15 leading-[40px]'>We are more than a job board. Ashton-Bridge is a full-service platform built for the modern logistics landscape — connecting drivers, companies, and essential services under one roof, so everyone can focus on what they do best.</p>
            </div>

            <div className='flex flex-col items-center justify-between'>
                {aboutUsData.map((item, index) => (
                    <div key={index} className='w-110 h-55 flex flex-col justify-center px-10 py-5 gap-5 mt-5 bg-primary border border-blue-900 rounded-[35px]'>
                        <h2 className='text-white text-xl font-bold'>{item.title}</h2>
                        <p className='text-gray-500'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutUs