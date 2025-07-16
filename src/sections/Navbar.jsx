import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';
import { motion } from 'motion/react';
import { AnimatePresence } from 'motion/react';
import ThemeButton from '../components/ThemeButton';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='w-full fixed  shadow  bg-base-100 z-20 '>
        <div className='padding-x  max-container '>
      

          <div className='flex items-center justify-between py-3'>
            <a href=""><p className='font-medium text-lg hover:text-blue-600'>@ralphreeven</p></a>


            <div className='hidden sm:block'>
                 <ul className='text-center flex gap-6 items-center'>
                    <li className='py-1 cursor-pointer font-medium  hover:text-blue-500 transition-colors ease-in duration-100'><a href="#home">Home</a></li>
                    <li className='py-1 cursor-pointer font-medium  hover:text-blue-500 transition-colors ease-in duration-100'><a href="#projects">Projects</a></li>
                    <li className='py-1 cursor-pointer font-medium  hover:text-blue-500 transition-colors ease-in duration-100'><a href="#about">About</a></li>
                    <li className='py-1 cursor-pointer font-medium  hover:text-blue-500 transition-colors ease-in duration-100'>Contact</li>
                    <li><ThemeButton/></li>
                </ul>
            </div>
{/*       
            <div className='sm:hidden'>
              <ThemeButton/>

            </div> */}

            <div className=' sm:hidden flex gap-5'>
                 <ThemeButton/>
                 <motion.button 
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  onClick={()=> setIsOpen(!isOpen)}
                  className='cursor-pointer '>
                  <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {isOpen ? <RxCross1 size={30}/> : <GiHamburgerMenu size={30}/>}
                    </motion.div>
                </motion.button>
            </div>

            </div>

           

            <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className='sm:hidden block overflow-hidden'
              >
                <motion.ul
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className='text-center pb-4'
                >
                  <motion.li 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className='py-2 cursor-pointer font-medium hover:text-blue-600 transition-colors'
                  >
                    <a href="#home">Home</a>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className='py-2 cursor-pointer font-medium hover:text-blue-600 transition-colors'
                  >
                    <a href="#projects">Projects</a>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className='py-2 cursor-pointer font-medium hover:text-blue-600 transition-colors'
                  >
                    <a href="#about">About</a>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className='py-2 cursor-pointer font-medium hover:text-blue-600 transition-colors'
                  >
                    Contact
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>

             
        

            

          </div>

       
        
 
    </nav>
  )
}

export default Navbar
