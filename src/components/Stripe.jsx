import React from 'react'

const Stripe = ({url, number}) => {
  return (
    <>
      {url && number ? (
        <div className='w-[16.66%] px-4 py-5 border-t-2 border-b-2 border-r-2 border-zinc-700 flex justify-between items-center'>
          <img src={url} alt="" />
          <span className='font-semibold'>{number}</span>
        </div>
      ) : null}
    </>
  )
}

export default Stripe