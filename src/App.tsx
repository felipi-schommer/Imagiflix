import React, { useState, useEffect } from 'react';
import CONST from './data/constants';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import CarouselMovie from './components/CarouselMovie';
import CarouselSeries from "./components/CarouselSeries";
import CarouselAnime from "./components/CarouselAnime";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
const {URL, APISTRING} = CONST;
  
 const [movies, setMovies] = useState({results:[]});

  useEffect(() =>{
    const fetchData = async () => {
      const response = await fetch(
        `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
      );
      
      const data =  await response.json();

      setMovies(data);
    }

    fetchData();
  },[]);

  // useEffect(() => 
  //   movies && console.log(movies), [movies])

  return (
    <div className=' m-auto antialised font-sans min-h-screen min-w-screen bg-black text-white'>
      <Hero {...movies?.results[1]} />
      <NavBar />
      <CarouselMovie />
      <CarouselSeries />
      <CarouselAnime />
      

    </div>
        
  );
}

export default App;
