import React from 'react'
import { BackgroundBeamsWithCollision } from '../components/BackgroundBeamsWithCollision'
import { AnimatedAbout } from '../components/AnimatedAbout'
import { aboutInfo } from '../constant'
const About = () => {
  
  return (
    <div className=' max-container padding-x pt-10   ' id='about'>
    <BackgroundBeamsWithCollision>
        <h1 className='text-5xl font-kanit py-10  text-blue-700'>About Me</h1>
    

        <AnimatedAbout aboutInfo={aboutInfo} />
    
    </BackgroundBeamsWithCollision>

     </div>
  )
}

export default About
