import Discover from '@/components/organism/Discover'
import Hero from '@/components/organism/Hero'
import Property from '@/components/organism/Property'
import Recommendedcities from '@/components/organism/Recommendedcities'
import React from 'react'

const page = () => {
    return (
        <>
            <Hero />
            <Property />
            <Discover />
            <Recommendedcities />
        </>
    )
}

export default page
