import React from 'react'
import arrowimg from "../assets/images/ArrowUp.svg"
import heroimg from "../assets/images/hero.svg"
import eclipse1 from "../assets/images/Ellipse1.png"

export const Hero = () => {
  return (
    <div className='pt-5 md:pt-14'>
      <div className='w-full md:flex md:items-center'>
        <div className='pl-8 sm:pl-12 w-full md:w-1/2 relative'>
          <div>
            <div className='flex items-center'>
              <div>
                <h2 className='text-white text-[30px] xs:text-[40px] font-semibold'>The Next <br /><span className='text-[#33BBCF]'>Generation</span></h2>
              </div>
              <div className='ml-5'>
                <div className='text-[#33BBCF] border border-[#33BBCF] rounded-full p-4 font-semibold cursor-pointer hover:bg-[#33BBCF] hover:text-white transition-all duration-250'>
                  <div className='flex'>
                    <p>Get</p>
                    <span><img src={arrowimg} alt="Arrowup img" /></span>
                  </div>
                  <div>
                    <p>Started</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className='text-white text-[30px] xs:text-[40px] md:text-[41px] font-semibold'>Payment Method.</h2>
            </div>
            <div className='my-5 text-center md:text-left'>
              <p className='text-[#96959e] text-sm md:w-[333px]'>Our team of exports uses a methodology to identify the credit cards most likely to fit your needs. <br />we examine annual percentage rates,annual fees.</p>
            </div>
          </div>
          <img src={eclipse1} alt="eclipse" className='w-[260px] absolute -top-[45%] left-0' />
        </div>
        <div className='w-full md:w-1/2 flex justify-end items-center'>
          <img src={heroimg} alt="HandRobotImage" className='w-[300px]' />
        </div>
      </div>
    </div>
  )
}