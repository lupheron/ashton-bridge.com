import React from 'react'
import DefaultButton from '../Button/DefaultButton'

const Begin = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center gap-4 sm:gap-5 mt-10 sm:mt-16 md:mt-24 lg:mt-30 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 text-white'>
            <h4 className='text-text font-bold tracking-[1px] text-sm sm:text-base'>READY TO BEGIN?</h4>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[60px] font-bold leading-tight'>
                Start building your business with <br className='hidden lg:block' /> Ashton-Bridge today
            </h1>
            <p className='text-gray-400 text-base sm:text-lg w-full max-w-xl lg:max-w-2xl'>Whether you drive trucks or run a company, our platform gives you the tools and connections to move forward with confidence.</p>

            <div className='flex items-center justify-center gap-5 w-full sm:w-auto'>
                <DefaultButton text='Get Started' customClasses='w-full sm:w-auto bg-text text-white liquid-button'/>
            </div>
        </div>
    )
}

export default Begin