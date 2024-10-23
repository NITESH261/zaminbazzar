import React from 'react'
import Image from 'next/image'

const Background = () => {
  return (
    <div>
      <Image
        src="/assets/background/background2.jpg"
        layout="fill"
        objectFit="cover"
        alt="Hero background"
      />
    </div>
  )
}

export default Background
