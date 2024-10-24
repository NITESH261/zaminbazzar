import React from 'react'
import Image from 'next/image'

const Background = () => {
  return (
    <div className='w-full flex h-ful'>
      <Image
        src="/assets/background/background2.jpg"
        layout="fill"
        alt="Hero background"
        className='object-cover w-full'
      />
    </div>
  )
}

export default Background
