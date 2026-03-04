import React from 'react'
import Header from '../Header/Header'
import Home from '../HomePage/Home'
const MainContainer = () => {
    return (
        <div className='bg-primary font-roboto px-[40px] py-5' >
            <Header />
            <div className='mt-30'>
                <Home />
            </div>
        </div>
    )
}

export default MainContainer