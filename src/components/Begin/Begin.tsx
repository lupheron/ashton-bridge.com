import React from 'react'
import DefaultButton from '../Button/DefaultButton'

const Begin = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center gap-5 mt-30 px-110 text-white'>
            <h4 className='text-text font-bold tracking-[1px]'>READY TO BEGIN?</h4>
            <h1 className='text-[60px]'>Start building your business with Ashton-Bridge today</h1>
            <p className='text-gray-400 text-lg w-140'>Whether you drive trucks or run a company, our platform gives you the tools and connections to move forward with confidence.</p>

            <div className='flex items-center justify-center gap-5'>
                <DefaultButton text='Get Started' customClasses='hidden bg-text text-white'/>
                <DefaultButton text='Coming soon' customClasses='bg-text text-white liquid-button'/>
            </div>
        </div>
    )
}

export default Begin