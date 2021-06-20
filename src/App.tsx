import React from 'react';

import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Carousel from './components/Carousel';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const App = () => {
  return (
    <div className=' m-auto antialised font-sans min-h-screen min-w-screen bg-black text-white'>
      <Hero />
      <NavBar />
      <Carousel />
      

    </div>
        
  );
}

export default App;
