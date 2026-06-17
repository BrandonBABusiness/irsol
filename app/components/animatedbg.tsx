'use client'
import React from 'react'
import { motion } from 'motion/react'

const GradientBg = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(#17599F 60%, #071C38A0 90%, #17599F3F)',
        }}
        className='flex flex-col justify-evenly align-middle'
      >

      </motion.div>
  )
}

export default GradientBg