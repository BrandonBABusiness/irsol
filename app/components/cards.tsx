import React from 'react'
import Card from './card'

const Cards = () => {
  return (
    <div className='h-[90vh] w-[95%] mx-[2.5%] flex flex-col items-center justify-evenly'>
        
        <Card title={"Cleaning"}></Card>
        <Card title={"Concrete"}></Card>
        <Card title={"Pressure Washing"}></Card>
    </div>
  )
}

export default Cards