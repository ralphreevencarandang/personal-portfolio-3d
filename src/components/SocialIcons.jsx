import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook  } from "react-icons/fa";
import { motion } from 'motion/react';



const hoverVariants = {
    hover:{
        scale: 1.2,
        rotate: 5,
        transition: {
        type: "spring",
        duration: 0.8,
        ease: "backInOut"
    }
    }
}
const SocialIcons = () => {
  return (
               <motion.div className='flex gap-2  ' initial={{ opacity: 0,x: -10,}} animate={{  opacity: 1, x: 0}} transition={{ease:"linear",delay:1.8}}>
                    <button className='bg-blue-600  rounded px-3 py-1.5 sm:px-4 sm:py-2 text-white font-kanit cursor-pointer hover:bg-blue-700 max-sm:text-sm '>Download CV</button>
                    <div className='flex gap-2' >
                    <motion.a variants={hoverVariants} whileHover="hover"href="" className='text-blue-600 hover:text-blue-700'> <FaGithub className='sm:w-[40px] sm:h-[40px] w-[30px] h-[40px] '/></motion.a>
                    <motion.a variants={hoverVariants} whileHover="hover"href="" className='text-blue-600 hover:text-blue-700'> <FaFacebook className='sm:w-[40px] sm:h-[40px] w-[30px] h-[40px]'/></motion.a>
                    <motion.a variants={hoverVariants} whileHover="hover"href="" className='text-blue-600 hover:text-blue-700'> <FaLinkedin className='sm:w-[40px] sm:h-[40px] w-[30px] h-[40px]'/></motion.a>  
                    </div>
              </motion.div>
)
}

export default SocialIcons
