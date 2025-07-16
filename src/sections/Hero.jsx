import HeroText from '../components/HeroText'
import HeroAvatar from '../components/HeroAvatar'
import { BackgroundLines } from '../components/BackgroundBoxes'




const Hero = () => {
  return (
    <section className='min-h-screen  max-container padding-x flex flex-col justify-center items-center' id='home'>
      <BackgroundLines  className='grid grid-cols-1 sm:grid-cols-2 gap-4  place-items-center' >  
        <HeroText/>
        <HeroAvatar/>
      </BackgroundLines>

      
    </section>
    
  )
}

export default Hero
