import React from 'react'
import { motion } from 'motion/react'
const Button = () => {
  return (
     <motion.div className='flex gap-2  ' initial={{ opacity: 0,x: -10,}} animate={{  opacity: 1, x: 0}} transition={{ease:"linear",delay:1.8}}>
        <button className='bg-blue-600  rounded px-3 py-1.5 sm:px-4 sm:py-2 text-white font-kanit cursor-pointer hover:bg-blue-700 max-sm:text-sm '>Download CV</button>
    </motion.div>
  )
}

export default Button
