import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import placeholder from "../Assets/header.jpg";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";

const Hero = ({ title = "Avengers Endgame", score = 10 }) => {
  const getBorderColor = () => {
    if (score >= 7) {
      return "border-green-400";
    } else if (score > 4 && score < 7) {
      return "border-yellow-400";
    } else {
      return "border-red-400";
    }
  };

  return (
    <header className="box-border relative min-h-screen -mb-32">
      <img
        className="object-cover object-center h-auto w-full"
        src={placeholder}
        alt="Filme em destaque"
      />

      <div className="absolute left-0 bottom-0 w-full h-2/6 bg-gradient-to-b from-transparent to-black"></div>

      <article className="absolute bottom-0 mb-64 px-8 ">
        <p className="text-3xl">Assita agora:</p>
        <h2 className="text-6xl font-bold">{title}</h2>
        <p className="text-xl">
          Nota{" "}
          <span
            className={`inline-block m-4 py-2 px-3 border-4 bg-black bg-opacity-75 text-light rounded-full  ${getBorderColor()}`}
          >
            {score}
          </span>
        </p>
        <button className="py-1 px-8 mr-3 mt-6  bg-black bg-opacity-50 rounded-md text-xl transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:bg-opacity-75">
          <FontAwesomeIcon className="mr-3" icon={faPlay} />
          Assistir
        </button>
        <button className="py-1 px-8 mt-6 bg-black bg-opacity-50 rounded-md text-xl transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:bg-opacity-75">
          <FontAwesomeIcon className="mr-3" icon={faPlus} />
          Minha Lista
        </button>
      </article>
    </header>
  );
};

export default Hero;
