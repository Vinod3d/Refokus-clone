import React from 'react'
import Button from './Button'
import { logo } from '../assets/image'

const Navbar = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex justify-between items-center border-b-[1px] border-zinc-700'>
      <div className="left flex">
        <img src={logo} alt="logo" />
        <div className="links flex gap-14 ml-32">
          {["Home", "Work", "Culture"].map((elem, index) => <a key={index} className='font1 text-sm flex items-center gap-1' href='#'>
          {index === 1 && (<span style={{boxShadow: '0 0 0.25em #00FF19'}} className='inline-block w-2 h-2 bg-green-600 rounded-full'></span>)}
            {elem}
            </a>)}
        </div>
      </div>
      <Button/>
    </div>
  )
}

export default Navbar