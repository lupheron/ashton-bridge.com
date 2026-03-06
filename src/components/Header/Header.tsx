'use client'
import React from 'react'
import Image from 'next/image'
import DefaultButton from '../Button/DefaultButton'
import ModalDefault from '../Modal/ModalDefault'

const Header = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    <DefaultButton
                        text="Get A Quote"
                        customClasses='w-40 h-12 text-lg text-white border-o rounded-[35px] hover:w-41 hover:h-13 transition-all duration-100'
                        onClick={handleOpen} />
                </div>
            </div>
            <ModalDefault open={open} handleClose={handleClose} />
        </div>
    )
}

export default Header