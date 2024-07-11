import React from 'react'
import Marquee from './Marquee'
import { logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9 } from '../assets/image'

const Marquees = () => {
    var images = [
        [
            logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9
        ],
        [
            logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9
        ],
    ]
  return (
    <div className='py-10 mt-32 w-full relative overflow-hidden'>
        {images.map((item, index) => <Marquee key={index} direction={index === 0 ? "left" : "right" } imagesurls={item}/>)}
    </div>
  )
}

export default Marquees