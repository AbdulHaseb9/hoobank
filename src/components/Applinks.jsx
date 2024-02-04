import React from 'react'
import transactionsimg from "../assets/images/Group481776.png"
import appstore from "../assets/images/applestore.svg"
import playstore from "../assets/images/playstore.svg"
import Ellipse from "../assets/images/Ellipse1.png"

export const Applinks = () => {
    return (
        <div className='px-8 sm:px-12 py-5 md:py-10 text-white relative'>
            <div className='w-full md:flex'>
                <div className='w-full md:w-1/2 flex justify-center sm:justify-end z-10'>
                    <img src={transactionsimg} alt="Transactions Image of App" className='w-56 sm:w-96' />
                </div>
                <div className='w-full md:w-1/2 flex justify-center items-center'>
                    <div className='w-60 sm:w-96'>
                        <h2 className='text-4xl font-bold text-white'>Easily control your billing & invoicing.</h2>
                        <p className='text-sm text-[#aeaeae] my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio praesentium quam fugit quaerat. Accusantium id soluta nihil culpa repudiandae! Ullam officia?</p>
                        <div className='flex gap-5'>
                            <img src={appstore} alt="AppStore" className='w-28' />
                            <img src={playstore} alt="GooglePlayStore" className='w-28' />
                        </div>
                    </div>
                </div>
            </div>
            <img src={Ellipse} alt="Ellipse" className='absolute left-0 -top-36' />
        </div>
    )
}
