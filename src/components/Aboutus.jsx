import React from 'react'

export const Aboutus = () => {
    return (
        <div className='px-8 sm:px-12 py-5'>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='flex items-center justify-center lg:justify-start my-2 sm:my-0 relative  lg:after:content-[""] lg:after:h-[15px] lg:after:w-[2px] lg:after:absolute lg:after:right-8 lg:after:bg-white'>
                    <h2 className='text-white text-4xl'>3800+</h2>
                    <p className='text-[#34BCD0] text-sm font-semibold'>USER ACTIVE</p>
                </div>
                <div className='flex items-center justify-center lg:justify-start my-2 sm:my-0 relative  lg:after:content-[""] lg:after:h-[15px] lg:after:w-[2px] lg:after:absolute lg:after:right-8 lg:after:bg-white'>
                    <h2 className='text-white text-4xl'>230+</h2>
                    <p className='text-[#34BCD0] text-sm font-semibold'>TRUSTED BY COMPANY</p>
                </div>
                <div className='flex items-center justify-center lg:justify-start my-2 sm:my-0'>
                    <h2 className='text-white text-4xl'>$230M+</h2>
                    <p className='text-[#34BCD0] text-sm font-semibold'>TRANSACTIONS</p>
                </div>
            </div>
        </div>
    )
}
