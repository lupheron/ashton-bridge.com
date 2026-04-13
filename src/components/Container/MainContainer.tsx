'use client'

import React, { useState } from 'react'
import Header from '../Header/Header'
import Home from '../HomePage/Home'
import Offer from '../Offer/Offer'
import HowItWorks from '../howitworks/HowItWorks'
import Begin from '../Begin/Begin'
import Reviews from '../Reviews/Reviews'
import Contact from '../Contact/Contact'
import Faq from '../Faq/Faq'
import Footer from '../Footer/Footer'
import AboutUs from '../AboutUs/AboutUs'
import AddCommentIcon from '@mui/icons-material/AddComment';
import { Box, Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ReviewForm, { type ReviewItem } from '../Forms/ReviewForm/ReviewForm'

const MainContainer = () => {
    const [isReviewOpen, setIsReviewOpen] = useState(false)
    const [reviewsRefreshSignal, setReviewsRefreshSignal] = useState(0)

    const handleSubmitReview = async (review: ReviewItem): Promise<{ ok: boolean; error?: string }> => {
        try {
            const res = await fetch('/api/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(review),
            })
            const data = await res.json()
            if (!res.ok) {
                return { ok: false, error: data.error || 'Failed to save review.' }
            }

            setReviewsRefreshSignal(prev => prev + 1)
            setIsReviewOpen(false)
            return { ok: true }
        } catch {
            return { ok: false, error: 'Network error while saving review.' }
        }
    }

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
                <Reviews refreshSignal={reviewsRefreshSignal} />
                <Contact />
                <Faq />
            </div>

            <div className='bg-[linear-gradient(to_top,var(--color-primary)_calc(100%-250px),#24475c_100%)] rounded-[35px] py-8 sm:py-10 mt-3 sm:mt-4 md:mt-5'>
                <Footer />
            </div>

            <button
                type="button"
                aria-label="Open review form"
                onClick={() => setIsReviewOpen(true)}
                className='fixed z-[90] flex items-center justify-center bottom-10 right-12 bg-text text-primary rounded-full w-10 h-10 shadow-lg cursor-pointer hover:w-[50px] hover:h-[50px] transition-[width,height] duration-[150ms] ease-out'
            >
                <AddCommentIcon />
            </button>

            <Modal
                open={isReviewOpen}
                onClose={() => setIsReviewOpen(false)}
                className='[&_.MuiBackdrop-root]:backdrop-blur-md [&_.MuiBackdrop-root]:bg-black/50'
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 'min(920px, 94vw)',
                        maxHeight: { xs: '90vh', lg: 'none' },
                    }}
                    className='rounded-[35px] overflow-y-auto lg:overflow-visible'
                >
                    <div className='sticky top-0 z-30 flex justify-end px-3 pt-3'>
                        <button
                            type='button'
                            onClick={() => setIsReviewOpen(false)}
                            className='inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/90 text-white hover:bg-primary transition-colors'
                            aria-label='Close review form'
                        >
                            <CloseIcon fontSize='small' />
                        </button>
                    </div>
                    <ReviewForm onSubmitReview={handleSubmitReview} />
                </Box>
            </Modal>
        </div>
    )
}

export default MainContainer