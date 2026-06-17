import React from 'react'
import Image from 'next/image'
import MenuSVG from '/menu.svg'

const Navigations = () => {

  return (
    
    <nav className='fixed top-0 left-0 px-4 mt-2 w-screen h-24 flex align-middle justify-between z-50'>
        
        {/* TITLE */}
        <div className="border-2 h-20 w-[40vw] border-blue-200 rounded-2xl relative overflow-hidden">

          <Image
          alt='Logo' 
          src={"/imgs/logo3.png"}
          fill={true}
          />
        </div>
        

        {/* MENU */}
        <button className="h-20 w-20 rounded-2xl border-2 bg-white border-blue-200 relative p-2">
          <Image
            src={"/menu.svg"}
            alt='menu'
            fill={true}
          />
        </button>
    </nav>
  )
}

export default Navigations