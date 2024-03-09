import React from 'react'
import Hero from '../hero/Hero';
import Navbar from '../navbar/Navbar';
import Find from '../find/Find';
import Highlights from '../cards/Highlights';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Find/>
      <Highlights/>
    </>
  )
}

export default Home;