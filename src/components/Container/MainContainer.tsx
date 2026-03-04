import React from 'react'
import Header from '../Header/Header'
import Home from '../HomePage/Home'
import Offer from '../Offer/Offer'

const MainContainer = () => {
    return (
        <div className='bg-primary font-roboto px-[40px] py-5' >
            <Header />
            <div className='mt-30'>
                <Home />
            </div>
            <Offer />
        </div>
    )
}

export default MainContainer