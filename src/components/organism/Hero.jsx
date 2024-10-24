import React from 'react';
import Background from '../atoms/Background';

const Hero = () => {
    return (
        <>
            <div className='w-full h-96 flex items-center justify-center relative'>
                <Background />
                <div className="absolute flex items-center justify-center h-full w-full bg-black bg-opacity-50">
                    <h1 className="text-white w-full max-w-5xl text-3xl md:text-4xl lg:text-6xl  break-normal text-center font-bold">The #1 site real estate professionals trust</h1>
                </div>
            </div>
        </>
    );
}

export default Hero