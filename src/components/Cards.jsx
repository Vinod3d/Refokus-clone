import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full'>
        <div className="max-w-screen-xl mx-auto py-32 flex items-center justify-center gap-5">
            <Card width={"basis-1/3"} start={false} para={true}/>
            <Card width={"basis-2/3"} start={true} para={false} hover={"hover:bg-violet-600"}/>
        </div>
    </div>
  )
}

export default Cards