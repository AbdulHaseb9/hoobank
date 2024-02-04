import React from 'react'

export const Tryservices = () => {
    return (
        <div className='px-8 sm:px-12 py-5 mb-5'>
            <div className='md:flex justify-between backdrop-blur-sm bg-white/15 px-7 sm:px-10 py-8 rounded-xl'>
                <section>
                    <h3 className='text-white text-3xl sm:text-4xl font-semibold mb-5'>Let's try our service now</h3>
                    <p className='text-[#aeaeae] text-sm sm:w-80'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </section>
                <section className='flex items-center mt-7 sm:mt-0'>
                    <button className='font-semibold px-3 py-2 bg-gradient-to-r from-[#9CEDF0] to-[#3AC1D3] text-black rounded-md'>Get Started</button>
                </section>
            </div>
        </div>
    )
}
