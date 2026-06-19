import React from 'react'
import Image from 'next/image'
import MenuSVG from '/menu.svg'

const Navigations = () => {

  return (
    <>
      <nav 
        className='fixed top-0 left-0 px-4 py-6 w-screen h-20 flex align-middle justify-between z-50'
        style={{

          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.6), transparent)'
        }}
      >
          
          {/* TITLE */}
          <div className="border-2 h-16 w-[40vw] border-blue-200 rounded-2xl relative overflow-hidden">

            <Image
            alt='Logo' 
            src={"/imgs/logo3.png"}
            fill={true}
            />
          </div>
          

          {/* MENU */}
          <button className="h-16 w-16 rounded-2xl border-2 bg-white border-blue-200 relative p-2">
            <Image
              src={"/menu.svg"}
              alt='menu'
              fill={true}
            />
          </button>
      </nav>

      {/* BOTTOM GRADIENT */}
      <nav 
        className='fixed left-0 w-screen h-4 -bottom-2 z-50'
        style={{

          background: 'radial-gradient(rgba(0, 0, 0, 0.2) 40%, transparent)'
        }}
      >

      </nav>
    </>
  )
}

export default Navigations