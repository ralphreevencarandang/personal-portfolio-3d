import React from 'react'
import { motion } from 'motion/react'

const HeroAvatar = () => {
  return (
    
          <motion.div 
          initial={{
            opacity: 0,
            x: -10,
          }}
 
          whileHover={{
            scale: 1.1,
            rotate: '20deg',
            transition: {
              type: 'spring',
              duration: 0.2
            }
          
          }}
       
         animate={{
            opacity: 1,
            x: 0,
            transition:{
              ease: "linear",
              delay: 1.8
            }

         }}
          className='hidden sm:block z-10 '>
              <img
                src="https://api.dicebear.com/9.x/bottts/svg?seed=Sara"
                alt="avatar" 
                className='w-80 '
                /> 
          </motion.div>
  )
}

export default HeroAvatar
