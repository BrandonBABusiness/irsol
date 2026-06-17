import React from 'react'
import { motion } from 'motion/react'
import HeroContent from './heroContent'
import GradientBg from './animatedbg'

const Hero = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#17599F',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
        
      <GradientBg></GradientBg>

      <HeroContent></HeroContent>
    </div>
  )
}

export default Hero