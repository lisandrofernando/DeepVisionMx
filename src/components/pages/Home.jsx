import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Footer from '../Footer'
import About from '../About'



function Home() {
  return (
    <>
       <HeroSection />
       <About/>
       <Cards/>
       <Footer/>
       
    </>
  )
}

export default Home