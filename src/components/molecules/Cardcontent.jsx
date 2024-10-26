import React from 'react'

const Card = (props) => {
    const { value, text, imgs } = props;
    return (
        <>
            <div className=''>
                <div className='w-[350px]  h-full relative'>
                    <img className='rounded-lg' src={imgs} alt="" />
                    <div className='absolute top-5 w-full'>
                        <div className='flex w-full justify-between px-3'>
                            <div className='p-0'>
                                <h6 className='text-white font-extrabold'>{text}</h6>
                            </div>
                            <div className='bg-white px-4 rounded-full text-center flex items-center'>
                                <p className='text-center'>{value}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card
