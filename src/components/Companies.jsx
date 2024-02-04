import React from 'react'
import Binance from "../assets/images/binance.png";
import Airbnb from "../assets/images/Airbnb.png";
import Coinbase from "../assets/images/Coinbase.png";
import Dropbox from "../assets/images/Dropbox.png";

export const Companies = () => {
    return (
        <div className='px-8 sm:px-12 py-5'>
            <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-7 place-items-center'>
                <div>
                    <img src={Binance} alt="Binance Logo" className='w-40' />
                </div>
                <div>
                    <img src={Airbnb} alt="Airbnb Logo" className='w-40' />
                </div>
                <div>
                    <img src={Coinbase} alt="Coinbase Logo" className='w-40' />
                </div>
                <div>
                    <img src={Dropbox} alt="Dropbox Logo" className='w-40' />
                </div>
            </div>
        </div>
    )
}
