import React from 'react'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
const HomePage = () => {
  return (
    <section className='min-h-screen '>
      <Navbar/>
      <Hero/>
      <Projects/>

    </section>
  )
}

export default HomePage
