import React from "react";
import Slick from "react-slick";
import mockData, { mockMovie } from "../data/mock";

const Poster = ({ cover, title, score }: mockMovie, index: number) => (
  <article key={index}>
    <img src={cover} alt={title} />
  </article>
);

interface CarouselData {
    title?: string;
    data?: mockMovie[];
}

const Carousel = ({
  title = "Filmes em destaque no imagiflix",
  data = mockData,
}: CarouselData) => {
  const options = {
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <section>
      <h2>{title}</h2>
      <Slick {...options}>
        {data.map((movie, index) => Poster(movie, index))}
      </Slick>
    </section>
  );
};

export default Carousel;
