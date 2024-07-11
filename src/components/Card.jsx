import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({width, start, para, hover}) => {
  return (
    <div className={` bg-zinc-800 min-h-[70vh] p-5 rounded-xl ${hover} ${width} transition-all flex flex-col justify-between`}>
        <div className="w-full">
            <div className="w-full flex justify-between items-center">
                <h3>one heading</h3>
                <FaArrowRightLong />
            </div>
            <h1 className='text-3xl font-medium mt-5'>whatever heading</h1>
        </div>

        <div className="down w-full">
            {
                start === true ? (
                    <>
                        <h1 className='text-5xl font-bold tracking-tighter leading-none'>start a project</h1>
                        <button className='rounded-full mt-5 py-2 px-3 border-[1px] border-zinc-50'>Contact Us</button>
                    </>
                ) : null
            }

            {
                para && (
                    <p className='text-sm text-zinc-400 font-medium '>Lorem ipsum dolor sit amet consectetur.</p>
                )
            }
            
        </div>
    </div>
  )
}

export default Card