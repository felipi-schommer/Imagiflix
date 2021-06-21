import React from 'react';

import Hero from './components/Hero';
import NavBar from './components/Navbar';
import CarouselMovie from './components/CarouselMovie';
import CarouselSeries from "./components/CarouselSeries";
import CarouselAnime from "./components/CarouselAnime";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const App = () => {
  return (
    <div className=' m-auto antialised font-sans min-h-screen min-w-screen bg-black text-white'>
      <Hero />
      <NavBar />
      <CarouselMovie />
      <CarouselSeries />
      <CarouselAnime />
      

    </div>
        
  );
}

export default App;
