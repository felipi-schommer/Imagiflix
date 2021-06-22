import React, { useState, useEffect } from 'react';
import CONST from './data/constants';

import Loading from './components/Loading';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import CarouselMovie from './components/CarouselMovie';
import CarouselSeries from "./components/CarouselSeries";
import CarouselAnime from "./components/CarouselAnime";
import Footer from './components/Footer';



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
const {URL, APISTRING} = CONST;
  
 const [movies, setMovies] = useState({results:[]});
 const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const fetchData = async () => {
      const response = await fetch(
        `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
      );
      
      const data =  await response.json();

      setMovies(data);

      setLoading(false);
    }

    fetchData();
  },[]);
  const [series, setSeries] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`
      );

      const data = await response.json();

      setSeries(data);
      setLoading(false);
    };

    fetchData();
  }, []);



  const [ featured, ...movieList ] = movies?.results;

  return (
    <div className=' m-auto antialised font-sans min-h-screen min-w-screen bg-black text-white'>
      {loading && (
        <>
          <Loading />
          <NavBar />
        </>
      )}
      {!loading && (
      <>
        <Hero {...featured} />
        <NavBar />
        <CarouselMovie data={movieList} />
        <CarouselSeries data={series?.results} />
        <CarouselAnime />
      </>
      )}
      <Footer />

    </div>
        
  );
}

export default App;
