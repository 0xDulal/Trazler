import React from 'react'
import Hero from '../components/HomePage/Hero'
import Featured from '../components/homePage/Featured'
import Offers from '../components/homePage/Offers'
import Testimonial from '../components/homePage/Testimonial'
import Newsletter from '../components/homePage/Newsletter'

const Home = () => {
  return (
    <>
      <Hero/>
      <Featured/>
      <Offers/>
      <Testimonial/>
      <Newsletter/>
    </>
  )
}

export default Home
