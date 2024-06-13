import React from 'react'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Data from './components/Data';
import Footer from './components/Footer';
import Client from './components/Client';
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='w-full min-h-screen  text-white bg-zinc-900 '>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Client />
      <Cards />
      <Data />
      <Footer />
      
      
      
    </div>
  )
}

export default App;