import React from 'react'
import Stripe from './Stripe'
import { img1, img2, img3 } from '../assets/image'

const Stripes = () => {
    var data = [
        {url: img1, number: 11},
        {url: img2, number: 11},
        {url: img3, number: 11},
        {url: img1, number: 11},
        {url: img2, number: 11},
        {url: img3, number: 11},
    ]
  return (
    <div className='flex items-center'>
        {data.map((elem, index)=>(
          <Stripe key={index} url={elem.url} number={elem.number} />
        ))}
        <Stripe/>
    </div>
  )
}

export default Stripes