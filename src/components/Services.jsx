import React from 'react'
import rewardsimage from "../assets/images/rewards.png"
import secured from "../assets/images/secured.png"
import balancetransfer from "../assets/images/balancetransfer.png"

export const Services = () => {
    return (
        <div className='px-8 sm:px-12 py-5 py-16 mb-40 text-white'>
            <div className='w-full md:flex'>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-[40px] font-semibold'>You do the business, we'll handle the money.</h2>
                    <p className='text-sm text-[#96959e] w-[400px] my-5'>With the right credit card, you can improve your financial life by building credits, earning rewards and saving money. but with hundread of credit cards on the market.</p>
                    <button className='font-semibold px-3 py-2 bg-gradient-to-r from-[#9CEDF0] to-[#3AC1D3] text-black rounded-md'>Get Started</button>
                </div>
                <div className='w-full md:w-1/2 pl-12 flex justify-center'>
                    <div>
                        <div className='h-1/3 flex items-center'>
                            <div>
                                <img src={rewardsimage} alt="Rewards" className='w-12' />
                            </div>
                            <div className='px-2'>
                                <h4 className='font-semibold text-md'>Rewards</h4>
                                <p className='text-[#96959e] text-sm w-[300px]'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                            </div>
                        </div>
                        <div className='h-1/3 flex items-center'>
                            <div>
                                <img src={secured} alt="Rewards" className='w-12' />
                            </div>
                            <div className='px-2'>
                                <h4 className='font-semibold text-md'>100% Secured</h4>
                                <p className='text-[#96959e] text-sm w-[300px]'>We take proactive steps make sure your information and transactions are secure</p>
                            </div>
                        </div>
                        <div className='h-1/3 flex items-center'>
                            <div>
                                <img src={balancetransfer} alt="Rewards" className='w-12' />
                            </div>
                            <div className='px-2'>
                                <h4 className='font-semibold text-md'>100% Secured</h4>
                                <p className='text-[#96959e] text-sm w-[300px]'>We take proactive steps make sure your information and transactions are secure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
