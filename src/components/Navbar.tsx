import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/imagiflix.png";
import userLogo from "../Assets/User.jpg";

import "./Navbar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar absolute top-0 left-0 grid grid-cols-2 w-full py-4 px-12">
      <div className="justify-self-start grid grid-cols-2 gap-8 items-center">
        <h1 className="hidden">Imagiflix</h1>
        <a href="#home">
          <img src={logo} alt="Imagiflix log" />
        </a>
        <ul className=" grid grid-flow-col gap-4 ">
          <li className="font-bold">Início</li>
          <li>
            <a href="#series">Séries</a>
          </li>
          <li>
            <a href="#movies">Filmes</a>
          </li>
        </ul>
      </div>

      <div className="items-center justify-self-end grid grid-flow-col">
        <form className="justify-self-end relative w-64">
          <input
            className="w-full bg-black rounded p-1 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100"
            type="text"
            placeholder="Títulos, Gêneros, Artistas"
          />
          <button
            className="search absolute right-2 pt-1"
            onClick={(e) => e.preventDefault()}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <div className="justify-self-end relative flex ml-4">
          <img src={userLogo} alt="Foto do usuário" onClick={handleClick} />
          <button onClick={handleClick}>
            <FontAwesomeIcon className="ml-2" icon={faCaretDown} />
          </button>
          <ul
            className={`absolute top-10 right-0 w-48 bg-black rounded p-3 transition-all duration-400 ease-in-out ${
              !isMenuOpen && "opacity-0 invisible"
            }`}
          >
            <li>
              <a href="#account" onClick={handleClick}>
                Minha Conta
              </a>
            </li>
            <li>
              <a href="#logout" onClick={handleClick}>
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
