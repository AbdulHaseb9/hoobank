import React, { useState } from 'react'
import logo from "../assets/images/logo.svg"
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

export const Navbar = () => {
    const [respnav, setrespnav] = useState(false);
    return (
        <div className='px-8 sm:px-12 py-4'>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img src={logo} alt="HooBank Logo" />
                    <p className='text-white font-bold'>Hoo<span className='text-[#34BCD0]'>Bank</span></p>
                </div>
                <div className='flex items-center'>
                    <div className='hidden md:block'>
                        <ul className='flex'>
                            <li>
                                <a href="#" className='px-1 mx-2 font-semibold text-[#96959e] hover:text-white transition-all duration-250'>Home</a>
                            </li>
                            <li>
                                <a href="#" className='px-1 mx-2 font-semibold text-[#96959e] hover:text-white transition-all duration-250'>About Us</a>
                            </li>
                            <li>
                                <a href="#" className='px-1 mx-2 font-semibold text-[#96959e] hover:text-white transition-all duration-250'>Features</a>
                            </li>
                            <li>
                                <a href="#" className='px-1 mx-2 font-semibold text-[#96959e] hover:text-white transition-all duration-250'>Solution</a>
                            </li>
                        </ul>
                    </div>
                    <div className='block sm:hidden'>
                        {respnav ? (
                            <RxCross1 className='text-[#96959e] hover:text-white transition-all duration-250 cursor-pointer' onClick={() => setrespnav(!respnav)} />
                        ) : <FaBarsStaggered className='text-[#96959e] hover:text-white transition-all duration-250 cursor-pointer' onClick={() => setrespnav(!respnav)} />
                        }
                    </div>
                </div>
            </div>
            {respnav ? (
                <div className='sm:hidden'>
                    <ul className='text-center py-5'>
                        <li className='my-4'>
                            <a href="#" className='px-1 mx-2 font-semibold text-[#96959e] hover:text-white transition-all duration-250 '>Home</a>
                        </li>
                        <li className='my-4'>
                            <a href="#" className='px-1 mx-2 my-2 font-semibold text-[#96959e] hover:text-white transition-all duration-250 '>About Us</a>
                        </li>
                        <li className='my-4'>
                            <a href="#" className='px-1 mx-2 my-2 font-semibold text-[#96959e] hover:text-white transition-all duration-250 '>Features</a>
                        </li>
                        <li className='my-4'>
                            <a href="#" className='px-1 mx-2 my-2 font-semibold text-[#96959e] hover:text-white transition-all duration-250 '>Solution</a>
                        </li>
                    </ul>
                </div>
            ) : null
            }
        </div>
    )
}
