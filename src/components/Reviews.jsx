import React from 'react'
import quotationimg from "../assets/images/quotation.svg"
import hermanjenson from "../assets/images/hermanjenson.png"
import stevemark from "../assets/images/stevemark.png"
import KennGallagher from "../assets/images/KennGallagher.png"

export const Reviews = () => {
    return (
        <div className='px-8 sm:px-12 py-5'>
            <div className='w-full'>
                <div className='w-full sm:flex items-center'>
                    <div className='w-full sm:w-1/2'>
                        <h2 className='text-white text-[40px] font-semibold'>What people are saying about us</h2>
                    </div>
                    <div className='w-full sm:w-1/2 flex items-center my-4 sm:my-0'>
                        <p className='text-[#aeaeae] text-sm'>Everything you need to accept card payments <br />and grow your business anywhere on the planet.</p>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
                    <div className='px-5 py-11 backdrop-blur-sm bg-white/15 rounded-2xl'>
                        <img src={quotationimg} alt="QuoationImage" />
                        <p className='text-white my-3 h-24 sm:h-20'>Money is only a tool. it will take you wherever you wish, but it will not replace you as the driver.</p>
                        <div className='flex gap-4'>
                            <div>
                                <img src={hermanjenson} alt="Founder & Leader Image" />
                            </div>
                            <div>
                                <h4 className='text-white font-bold'>Herman Jensen</h4>
                                <p className='text-[#aeaeae] text-xs font-semibold'>Founder & Leader</p>
                            </div>
                        </div>
                    </div>
                    <div className='px-5 py-11 backdrop-blur-sm bg-white/15 rounded-2xl'>
                        <img src={quotationimg} alt="QuoationImage" />
                        <p className='text-white my-3 h-24 sm:h-20'>Money makes your life easier. if you're lucky to have it, you're lucky.</p>
                        <div className='flex gap-4'>
                            <div>
                                <img src={stevemark} alt="Founder & Leader Image" />
                            </div>
                            <div>
                                <h4 className='text-white font-bold'>Steve Mark</h4>
                                <p className='text-[#aeaeae] text-xs font-semibold'>Founder & Leader</p>
                            </div>
                        </div>
                    </div>
                    <div className='px-5 py-11 backdrop-blur-sm bg-white/15 rounded-2xl'>
                        <img src={quotationimg} alt="QuoationImage" />
                        <p className='text-white my-3 h-24 sm:h-20'>It is usually people in the money business,finance, and international trade that are really rich.</p>
                        <div className='flex gap-4'>
                            <div>
                                <img src={KennGallagher} alt="Founder & Leader Image" />
                            </div>
                            <div>
                                <h4 className='text-white font-bold'>Kenn Gallagher</h4>
                                <p className='text-[#aeaeae] text-xs font-semibold'>Founder & Leader</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
