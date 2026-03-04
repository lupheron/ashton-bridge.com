import React from 'react'
import DefaultButton from '../Button/DefaultButton'

const Home = () => {
    return (
        <div className='px-70 flex flex-col items-center justify-center gap-7 text-center'>
            <DefaultButton text="Simplify your workflow" customClasses='w-60 h-12 rounded-[35px] liquid-button' />
            <h1 className='text-[80px] font-bold text-white'>Where <span className='text-text'>Logistics</span> Meets <br /> Innovation</h1>

            <p className='w-200 text-[20px] text-gray-500'>Ashton-Bridge connects truck drivers, freight companies, and IT solutions under one unified platform — built for the modern marketplace.</p>
            <div className='flex items-center justify-center gap-5'>
                <DefaultButton text="Get Started" customClasses='w-40 bg-text text-white rounded-[35px]' />
                <DefaultButton text="Explore Services" customClasses='w-40 bg-transparent text-text border border-text rounded-[35px]' />
            </div>
            <div className='w-300 h-300'>

            </div>
        </div>
    )
}

export default Home