import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
        <div id="contact" className='px-50 mt-40 scroll-mt-28'>
            <div className='text-white bg-secondary rounded-[35px] py-20 px-20 liquid-button border-none'>
                <h1 className='text-6xl font-bold text-center'>Contact us</h1>

                <div className='flex items-center justify-between mt-20'>
                    <div>
                        <h2 className='text-3xl'>Phone Number</h2>
                        <div className='flex items-center gap-5 mt-2'>
                            <PersonIcon />
                            <p className='text-md'>+1 (123) 456-7890</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-3xl'>Location address</h2>
                        <div className='flex items-center gap-5 mt-2'>
                            <LocationOnIcon />
                            <p className='text-md'>20 Mirzo Ulugbek, Samarkand, Uzbekistan</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-3xl'>Email Address</h2>
                        <div className='flex items-center gap-5 mt-2'>
                            <EmailIcon />
                            <p className='text-md'>drenixit@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact