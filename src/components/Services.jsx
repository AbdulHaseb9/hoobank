import React from 'react'
import rewardsimage from "../assets/images/rewards.png"
import secured from "../assets/images/secured.png"
import balancetransfer from "../assets/images/balancetransfer.png"

export const Services = () => {
    return (
        <div className='px-8 sm:px-12 py-5 md:py-16 text-white'>
            <div className='w-full md:flex'>
                <div className='w-full md:w-1/2 z-10'>
                    <h2 className='text-[40px] font-semibold'>You do the business, we'll handle the money.</h2>
                    <p className='text-sm text-[#96959e] my-5'>With the right credit card, you can improve your financial life by building credits, earning rewards and saving money. but with hundread of credit cards on the market.</p>
                    <button className='font-semibold px-3 py-2 bg-gradient-to-r from-[#9CEDF0] to-[#3AC1D3] text-black rounded-md'>Get Started</button>
                </div>
                <div className='w-full md:w-1/2 flex justify-center mt-6 sm:mt-0'>
                    <div className='grid gap-3'>
                        <div className='flex justify-center items-center'>
                            <div className='w-1/5 mr-2'>
                                <img src={rewardsimage} alt="Rewards" className='w-12 mr-2' />
                            </div>
                            <div className='w-4/5'>
                                <h4 className='font-semibold text-md'>Rewards</h4>
                                <p className='text-[#96959e] text-sm'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='w-1/5 mr-2'>
                                <img src={secured} alt="Rewards" className='w-12' />
                            </div>
                            <div className='w-4/5'>
                                <h4 className='font-semibold text-md'>100% Secured</h4>
                                <p className='text-[#96959e] text-sm'>We take proactive steps make sure your information and transactions are secure</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='w-1/5 mr-2'>
                                <img src={balancetransfer} alt="Rewards" className='w-12' />
                            </div>
                            <div className='w-4/5'>
                                <h4 className='font-semibold text-md'>Balance Transfer</h4>
                                <p className='text-[#96959e] text-sm'>We take proactive steps make sure your information and transactions are secure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
