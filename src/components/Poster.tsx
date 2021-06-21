import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import Score from './Score';
import { mockMovie } from '../data/mock';

import './Poster.css';



const Poster = ({ cover, title, score }: mockMovie, index: number) => (
  <article
    className="relative transition-all duration-500 ease-in-out transform hover:py-5 hover:scale-110   "
    key={index}
  >
    <img src={cover} alt={title} />
    <div className="poster cursor-pointer absolute inset-0  w-full h-full py-8  grid place-items-center bg-black bg-opacity-50 transition-all duration-500 ease-in-out opacity-0 hover:opacity-100">
      <FontAwesomeIcon icon={faPlayCircle} size="5x" />
      <h2 className="text-2xl">{title}</h2>
      <Score value={score} />
    </div>
  </article>
);

export default Poster;
