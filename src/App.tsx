import React, { useState, useEffect } from "react";
import emitter from "./utils/eventEmitter";

import CONST from "./data/constants";

import Loading from "./components/Loading";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import CarouselMovie from "./components/CarouselMovie";
import CarouselSeries from "./components/CarouselSeries";
import CarouselAnime from "./components/CarouselAnime";
import Footer from "./components/Footer";
import Modal from './components/Modal';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export enum TitleType {
  Movie = "movie",
  Series = "tv",
};

export interface Title {
  type: TitleType;
  id: number | string;
};

const App = () => {
  const { URL, APISTRING } = CONST;

  const [movies, setMovies] = useState({ results: [] });
  const [series, setSeries] = useState({ results: [] });
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState(true);

  
  const [featured, ...movieList] = movies?.results;
  
  const getTitle = async ({ type, id }: Title) => { setLoading(true);
    const title = await fetch(`${URL}/${type}/${id}${APISTRING}`);
    const titleData = await title.json();
    setTitle(titleData);
    setLoading(false);

  };
  useEffect(() => {

    emitter.addListener(CONST.EVENTS.PosterCLick, getTitle);
    emitter.addListener(CONST.EVENTS.ModalClose, setTitle)
    

    const fetchData = async () => {
      const movies = await fetch(
        `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
      );

      const moviesData = await movies.json();

      setMovies(moviesData);

      const series = await fetch(
        `${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`
      );

      const seriesData = await series.json();

      setSeries(seriesData);

      setLoading(false);
    };

    fetchData();

  }, []);
  
  

  useEffect(() => title && console.log(title), [title])
  
  return (
    <div className=" m-auto antialised font-sans min-h-screen min-w-screen bg-black text-white">
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
          <CarouselMovie data={movieList}  />
          <CarouselSeries data={series?.results}  />
          <CarouselAnime />
        </>
      )}
      <Footer />
      {! loading && title && <Modal {...title}/>}
    </div>
  );
};

export default App;
