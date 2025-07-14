import React from 'react'
import { FlipWords } from '../components/Flipwords'
import { HeroWords } from '../constant'
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <section className='h-screen w-screen max-container padding-x flex flex-col justify-center md:flex-row md:justify-between items-center'>  
          <div className='max-w-[304px] md:max-w-[480px] lg:max-w-3xl'>
              <motion.p 
              initial={{
                opacity:0,
                x: -10
              }}
              animate={{
                opacity:1,
                x:0
              }}
              transition={{
                ease:"linear",
                delay:1
              }}
              className='font-extrabold tracking-wide font-shadow mb-3 text-2xl'>
                Hi, I'm Ralph
                </motion.p>
              <motion.h1 
                initial={{
                opacity:0,
                x: -10
              }}
              animate={{
                opacity:1,
                x:0
              }}
              transition={{
                ease:"linear",
                delay:1.5
              }}
              className='font-semibold  font-kanit  text-3xl md:text-5xl lg:text-6xl'>
                 An aspiring developer focused on building 
              </motion.h1>
              <h1 className='font-semibold font-kanit text-3xl md:text-5xl lg:text-6xl'>
                <span ><FlipWords words={HeroWords} className='text-red-600'/></span>
                 Web Applications.

              </h1>
          </div>

          

    </section>
  )
}

export default Hero
