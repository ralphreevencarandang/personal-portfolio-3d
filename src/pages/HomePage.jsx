import React from 'react'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import About from '../sections/About'
import Skills from '../sections/Skills'
const HomePage = () => {
  return (
    <section className='min-h-screen '>
        <Navbar/>


        <Hero/>
        <Projects/>
        <About/>
        <Skills/>


    </section>
  )
}

export default HomePage
