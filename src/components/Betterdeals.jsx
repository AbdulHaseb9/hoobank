import React from 'react'
import analysisimg from "../assets/images/Group481775.png"

export const Betterdeals = () => {
    return (
        <div className='px-8 sm:px-12 py-5 md:py-16 text-white'>
            <div className="w-full md:flex">
                <div className='w-full md:w-1/2'>
                    <h2 className='text-[35px] font-semibold'>Find a better card deal in few easy steps.</h2>
                    <p className='text-sm text-[#96959e] my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum suscipit libero.</p>
                    <button className='font-semibold px-3 py-2 bg-gradient-to-r from-[#9CEDF0] to-[#3AC1D3] text-black rounded-md'>Get Started</button>
                </div>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <img src={analysisimg} alt="App Analysis Image" className='w-80' />
                </div>
            </div>
        </div>
    )
}
