
import Footer from '@/components/organism/Footer'
import Booking_img from '@/components/organism/testimonials/Booking_img'
import Booking_video from '@/components/organism/testimonials/Booking_video'
import Hero from '@/components/organism/testimonials/Hero'
import Review from '@/components/organism/testimonials/Review'
import React from 'react'

const page = () => {
    return (
        <>
            <Hero />
            <Review />
            <Booking_img />
            <Booking_video />
            <Footer />
        </>
    )
}

export default page
