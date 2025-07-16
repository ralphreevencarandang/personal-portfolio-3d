import React from 'react'
import SocialIcons from '../components/SocialIcons'
const Footer = () => {
  return (
    <div className='w-full pb-10'>
        <div className='padding-x max-container flex flex-col justify-center items-center sm:justify-between sm:flex-row'>
          <div>
            <SocialIcons/>
          </div>
            <p className='font-shadow py-3 text-lg'>Designed and Created by Ralph Carandang</p>
        </div>
    </div>
  )
}

export default Footer
