import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
        <div id="contact" className='px-4 sm:px-8 md:px-10 lg:px-12 mt-16 sm:mt-24 md:mt-32 lg:mt-40 scroll-mt-28'>
            <div className='text-white bg-secondary rounded-[35px] py-10 sm:py-14 md:py-16 lg:py-20 px-6 sm:px-10 md:px-14 lg:px-20 liquid-button border-none'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center'>Contact us</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8 md:gap-10 xl:gap-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl text-center md:text-left'>Phone Number</h2>
                        <div className='flex items-center justify-center md:justify-start gap-3 sm:gap-5 mt-1 sm:mt-2'>
                            <PersonIcon className='text-text shrink-0' />
                            <p className='text-sm sm:text-base'>+1 (123) 456-7890</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl text-center md:text-left'>Location address</h2>
                        <div className='flex items-center justify-center md:justify-start gap-3 sm:gap-5 mt-1 sm:mt-2'>
                            <LocationOnIcon className='text-text shrink-0' />
                            <p className='text-sm sm:text-base'>20 Mirzo Ulugbek, Samarkand, Uzbekistan</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl text-center md:text-left'>Email Address</h2>
                        <div className='flex items-center justify-center md:justify-start gap-3 sm:gap-5 mt-1 sm:mt-2'>
                            <EmailIcon className='text-text shrink-0' />
                            <p className='text-sm sm:text-base'>drenixit@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact