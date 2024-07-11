import React, { useState } from 'react'
import {work1, work2, work3, work4, work5} from '../assets/image/index.js'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

const Work = () => {
    const [images, setImages] = useState([
        {url: work1, top:"50%", left:"50%", isActive: false },
        {url: work2, top:"56%", left:"44%", isActive: false},
        {url: work3, top:"45%", left:"56%", isActive: false},
        {url: work4, top:"51%", left:"49%", isActive: false},
        {url: work5, top:"43%", left:"40%", isActive: false},
    ])

    const {scrollY} = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        showHideImages(latest);
    })

    function showHideImages(scrollVal){

        const updatedImages = images.map((img, index) => ({
            ...img,
            isActive: scrollVal >= 30 + (index * 30),
        }));
        setImages(updatedImages);
    }

  return (
    <div className='w-full pb-12'>
        <div className="relative max-w-screen-xl mx-auto text-center">
            <h1 className="text-[30vw] leading-none font-medium tracking-tighter select-none">Work</h1>
            <div className="absolute top-0 w-full h-full">
                {images.map((elem, index)=>(
                    elem.isActive && (
                     <img 
                        key={index} 
                        className='w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]' 
                        src={elem.url} 
                        alt="" 
                        style={{
                            top: elem.top,
                            left: elem.left,
                        }}
                     />
                    )
                ))}
            </div>
        </div>
    </div>
  )
}

export default Work