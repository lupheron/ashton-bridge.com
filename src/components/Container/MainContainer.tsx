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
        <div className='max-w-[1920px] mx-auto bg-primary font-roboto px-2 sm:px-4 md:px-6 lg:px-40 py-5 bg-[radial-gradient(ellipse_at_50%_0%,#33627d_0%,transparent_600px),radial-gradient(circle_at_0%_0%,#24475c_0%,transparent_810px),radial-gradient(circle_at_100%_0%,#24475c_0%,transparent_810px)]' >
            <div className='px-1 sm:px-2 md:px-4'>
                <Header />
            </div>
            <div className='bg-[linear-gradient(to_bottom,transparent_calc(100%-250px),#24475c_100%)] rounded-[35px] py-8 sm:py-10 mt-16 sm:mt-24 md:mt-32 lg:mt-40'>
                <Home />
                <AboutUs />
            </div>
            <div className='bg-[linear-gradient(to_bottom,#33627d_0px,var(--color-primary)_350px,var(--color-primary)_calc(100%-350px),#24475c_100%)] rounded-[35px] py-8 sm:py-10 mt-3 sm:mt-4 md:mt-5'>
                <Offer />
                <HowItWorks />
                <Begin />
            </div>

            <div className='bg-[linear-gradient(to_bottom,#33627d_0px,var(--color-primary)_250px,var(--color-primary)_calc(100%-250px),#24475c_100%)] rounded-[35px] py-8 sm:py-10 mt-3 sm:mt-4 md:mt-5'>
                <Reviews />
                <Contact />
            </div>

            <div className='bg-[linear-gradient(to_top,var(--color-primary)_calc(100%-250px),#24475c_100%)] rounded-[35px] py-8 sm:py-10 mt-3 sm:mt-4 md:mt-5'>
                <Footer />
            </div>
        </div>
    )
}

export default MainContainer