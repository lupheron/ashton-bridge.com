import React from 'react'
import Image from 'next/image'
import DefaultButton from '../Button/DefaultButton'

const Header = () => {
    return (
        <div id='home' className='w-[80%] mx-auto px-10 font-roboto floating-header'>
            <div className='flex justify-between items-center py-2'>
                <div>
                    <Image src="/ashton-logo.jpg" alt="Logo" width={100} height={100} className='rounded-[50%] w-25 h-23' />
                </div>
                <div>
                    <ul className='flex justify-between items-center gap-10'>
                        <li className='w-20 text-lg cursor-pointer hover:text-xl transition-all duration-100 text-white'>Home</li>
                        <li className='w-20 text-lg cursor-pointer hover:text-xl transition-all duration-100 text-white'>About</li>
                        <li className='w-20 text-lg cursor-pointer hover:text-xl transition-all duration-100 text-white'>Services</li>
                        <li className='w-20 text-lg cursor-pointer hover:text-xl transition-all duration-100 text-white'>Contact</li>
                    </ul>
                </div>

                <div className='w-60 flex justify-between items-center gap-2'>
                    <DefaultButton text="Login" customClasses='w-30 h-12 text-lg text-white border-o rounded-[35px] hover:w-31 hover:h-14 transition-all duration-100' />
                    <DefaultButton text="Sign Up" customClasses='w-30 h-12 text-lg text-white border-o rounded-[35px] hover:w-31 hover:h-14 transition-all duration-100' />
                </div>
            </div>
        </div>
    )
}

export default Header