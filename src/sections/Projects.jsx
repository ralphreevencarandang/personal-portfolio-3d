import React from 'react'
import { BentoGrid , BentoGridItem} from '../components/BentoGrid'
import { BentoGridItems } from '../constant';
import Skeleton from '../components/Skeleton';

import CardIcon from '../components/CardIcon';


const Projects = () => {

  return (
    <section className='min-h-screen max-container padding-x  pt-10' id='projects'>
            <h1 className='text-5xl font-kanit py-10 font-semibold text-blue-700 '>Projects</h1>
            <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]  ">
                {BentoGridItems.map((item, i) => (
                    <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={<Skeleton imageUrl={item.imgUrl}/>}
                    icon={<CardIcon websiteUrl={item.websiteUrl} githubUrl={item.githubUrl}/>}
                    className={item.className}
                    TechStack={item.techStack}
                    />
                ))}
            </BentoGrid>
    </section>
  )
}

export default Projects
