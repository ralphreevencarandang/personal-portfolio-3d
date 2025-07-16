import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook  } from "react-icons/fa";
import { motion } from 'motion/react';
import Button from './Button';


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
                   
                    <motion.a variants={hoverVariants} whileHover="hover"href="https://github.com/ralphreevencarandang" target='_blank' className='text-blue-600 hover:text-blue-700'> <FaGithub className='sm:w-[40px] sm:h-[40px] w-[30px] h-[40px] '/></motion.a>
                    <motion.a variants={hoverVariants} whileHover="hover" href="https://www.facebook.com/arar404" target='_blank' className='text-blue-600 hover:text-blue-700'> <FaFacebook className='sm:w-[40px] sm:h-[40px] w-[30px] h-[40px]'/></motion.a>
                    <motion.a variants={hoverVariants} whileHover="hover"href="https://www.linkedin.com/in/ralph-reeven-carandang-273877265/" target='_blank' className='text-blue-600 hover:text-blue-700'> <FaLinkedin className='sm:w-[40px] sm:h-[40px] w-[30px] h-[40px]'/></motion.a>  
                  
              </motion.div>
)
}

export default SocialIcons
