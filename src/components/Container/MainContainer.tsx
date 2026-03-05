import React from 'react'
import Header from '../Header/Header'
import Home from '../HomePage/Home'
import Offer from '../Offer/Offer'
import HowItWorks from '../howitworks/HowItWorks'
import Begin from '../Begin/Begin'
import Reviews from '../Reviews/Reviews'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import AboutUs from '../AboutUs/AboutUs'

const MainContainer = () => {
    return (
        <div className='max-w-[1920px] mx-auto bg-primary font-roboto px-[40px] py-5' >
            <div className='px-50'>
                <Header />
            </div>
            <div className='mt-40'>
                <Home />
                <AboutUs />
            </div>
            <div>
                <Offer />
                <HowItWorks />
                <Begin />
            </div>

            <div>
                <Reviews />
                <Contact />
            </div>

            <Footer />
        </div>
    )
}

export default MainContainer