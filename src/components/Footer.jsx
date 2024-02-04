import React from 'react'
import logo from "../assets/images/logo.svg"


export const Footer = () => {
    return (
        <div className='px-8 sm:px-20 py-8 bg-[#06080D]'>
            <div className='w-full border-b border-[#aeaeae] pb-5 grid grid-cols-1 sm:grid-cols-4 gap-4'>
                <div className='sm:flex sm:justify-center'>
                    <div>
                        <div className='flex'>
                            <img src={logo} alt="HooBank Logo" className='w-12' />
                            <h4 className='text-3xl text-white font-bold'>Hoo<span className='text-[#34BCD0]'>Bank</span></h4>
                        </div>
                        <div className='my-4'>
                            <p className='text-sm text-[#aeaeae] w-60 md:w-48 lg:w-52'>A new way to make the payments easy,reliable and secure.</p>
                        </div>
                    </div>
                </div>
                <div className='sm:flex sm:justify-center'>
                    <div>
                        <h3 className='text-white mb-3'>Usefull links</h3>
                        <ul>
                            <li className='text-sm text-[#aeaeae] my-2'><a href="#">Content</a></li>
                            <li className='text-sm text-[#aeaeae] my-2'><a href="#">How it works</a></li>
                            <li className='text-sm text-[#aeaeae] my-2'><a href="#">Create</a></li>
                            <li className='text-sm text-[#aeaeae] my-2'><a href="#">Explore</a></li>
                            <li className='text-sm text-[#aeaeae] my-2'><a href="#">Terms & Services</a></li>
                        </ul>
                    </div>
                </div>
                <div className='sm:flex sm:justify-center'>
                    <div>
                        <h3 className='text-white mb-3'>Community</h3>
                        <ul>
                            <li className='text-sm text-[#aeaeae] my-2'><a href="#">Help Center</a></li>
                            <li className='text-sm text-[#aeaeae] my-2'><a href="#">Partners</a></li>
                            <li className='text-sm text-[#aeaeae] my-2'><a href="#">Suggestion</a></li>
                            <li className='text-sm text-[#aeaeae] my-2'><a href="#">Blog</a></li>
                            <li className='text-sm text-[#aeaeae] my-2'><a href="#">Newsletters</a></li>
                        </ul>
                    </div>
                </div>
                <div className='sm:flex sm:justify-center'>
                    <div>
                        <h3 className='text-white mb-3'>Partners</h3>
                        <ul>
                            <li className='text-sm text-[#aeaeae] my-2'><a href="#">Our Partner</a></li>
                            <li className='text-sm text-[#aeaeae] my-2'><a href="#">Become a Partner</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='pt-5 sm:flex justify-between'>
                <p className='text-sm text-[#aeaeae] my-4 sm:my-0'>Copyright &copy; 2021 HooBank. All Rights Reserved.</p>
                <a href="mailto:haseebsheikh2380@gmail.com" className='text-[#aeaeae]'>haseebsheikh2380@gmail.com</a>
            </div>
        </div>
    )
}
