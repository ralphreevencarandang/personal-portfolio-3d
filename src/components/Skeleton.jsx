import React from 'react'
import { botAvatar } from '../assets/images'
const Skeleton = ({imageUrl}) => {
  return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 ">
            <img src={imageUrl} alt="Project Images" className='w-full object-cover' />
        </div>
  )
}

export default Skeleton
