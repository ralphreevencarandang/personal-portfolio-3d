import React from 'react'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Footer from '../sections/Footer'
import Contact from '../sections/Contact'
const HomePage = () => {
  return (
    <section className='min-h-screen '>
        <Navbar/>
        <Hero/>
        <Projects/>
        <Skills/>
        <About/>
        <Contact/>
        <Footer/>


    </section>
  )
}

export default HomePage
