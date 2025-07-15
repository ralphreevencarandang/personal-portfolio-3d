import React from 'react'
import { HeroWords } from '../constant'
import { FlipWords } from './Flipwords'
import { motion } from 'motion/react'
import SocialIcons from './SocialIcons'
const slideInVariants = {
  initial: {
    opacity: 0,
    x: -10,
  },
  animate: {
    opacity: 1,
    x: 0
  }
}

const HeroText = () => {
  return (
     <div className='max-w-[400px] md:max-w-[480px] lg:max-w-4xl z-10  px-4 py-2 w-full'>
          
              <motion.p variants={slideInVariants} initial="initial"animate="animate"
              transition={{
                ease:"linear",
                delay:1
              }}

              className='font-extrabold tracking-wide font-shadow mb-3 text-3xl sm:text-3xl'>
                Hi, I'm Ralph
              </motion.p>

              <motion.h1 variants={slideInVariants} initial="initial"animate="animate"

              transition={{
                ease:"linear",
                delay:1.2
              }}
              className='font-semibold  font-kanit  text-4xl md:text-5xl lg:text-6xl'>
                 An aspiring developer focused on building 
              </motion.h1>

              <motion.h1 variants={slideInVariants} initial="initial"animate="animate"
              
              transition={{
                ease:"linear",
                delay:1.5
              }}
              className='font-semibold font-kanit text-4xl md:text-5xl lg:text-6xl'>
                <span ><FlipWords words={HeroWords} className='text-red-600'/></span>
                 Web Applications.

              </motion.h1>

        
            <div className='py-5'>
                    <SocialIcons/>
            </div>
          </div>
  )
}

export default HeroText
