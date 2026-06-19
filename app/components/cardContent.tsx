'use client'

import React from 'react'

interface props {

    title: string;
}

const CardBtn = ({title}:props) => {

  return (
    <>
        <button className='h-full w-full text-[#071C38] text-center text-[4vh] flex items-center justify-center'>

            <span>{title}</span>
        </button>
    </>
  )
}

export default CardBtn