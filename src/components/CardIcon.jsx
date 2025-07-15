import React from 'react'
import { LuLink } from "react-icons/lu";
import { FaGithub  } from "react-icons/fa";
import { motion } from 'motion/react';

const CardIcon = ({websiteUrl, githubUrl}) => {
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
  
  return (
    <div className='flex gap-3'> 
      <motion.a variants={hoverVariants} whileHover='hover' href={githubUrl} target='_blank' ><FaGithub className="h-6 w-6 text-neutral-500 hover:text-blue-500" /></motion.a>
      <motion.a variants={hoverVariants} whileHover='hover' href={websiteUrl} target='_blank'> <LuLink className="h-6 w-6 text-neutral-500 hover:text-blue-500"/></motion.a>

    </div>
  )
}

export default CardIcon
