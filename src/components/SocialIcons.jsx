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
               <div className='flex gap-2'>
                    <motion.a variants={hoverVariants} whileHover="hover"href="" className='text-red-600 hover:text-blue-200'> <FaGithub size={40}/></motion.a>
                    <motion.a variants={hoverVariants} whileHover="hover"href="" className='text-red-600 hover:text-blue-200'> <FaFacebook size={40}/></motion.a>
                    <motion.a variants={hoverVariants} whileHover="hover"href="" className='text-red-600 hover:text-blue-200'> <FaLinkedin size={40}/></motion.a>
                   
          
                     
        
              </div>
)
}

export default SocialIcons
