import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="mt-16 px-12  text-gray-600 text-sm">
      <a className="hover:text-white" href="#Facebook">
        <FontAwesomeIcon className="mr-4" icon={faFacebookSquare} size="2x" />
      </a>
      <a className="hover:text-white" href="#Instagram">
        <FontAwesomeIcon className="mx-4" icon={faInstagram} size="2x" />
      </a>
      <a className="hover:text-white" href="#Twitter">
        <FontAwesomeIcon className="mx-4" icon={faTwitter} size="2x" />
      </a>
      <a className="hover:text-white" href="#YouTube">
        <FontAwesomeIcon className="ml-4" icon={faYoutube} size="2x" />
      </a>
      <div className=" grid  grid-cols-4 grid-rows-4 gap-2 mt-3 ">
        <a className=" hover:text-white" href="#Idiomas">
          Idioma e legendas
        </a>
        <a className="hover:text-white" href="#Descrição">
          Audiodescrição
        </a>
        <a className="hover:text-white" href="#Ajuda">
          Centro de Ajuda
        </a>
        <a className="hover:text-white" href="#Cartão">
          Cartão pré-pago
        </a>
        <a className="hover:text-white" href="#Imprensa">
          Impensa
        </a>
        <a className="hover:text-white" href="#Investidores">
          Relação com investidores
        </a>
        <a className="hover:text-white" href="#Carreiras">
          Carreiras
        </a>
        <a className="hover:text-white" href="#Uso">
          Termos de uso
        </a>
        <a className="hover:text-white" href="#Privacidade">
          Privacidade
        </a>
        <a className="hover:text-white" href="#Avisos">
          Avisos legais
        </a>
        <a className="hover:text-white" href="#Cookies">
          Preferências de Cookies
        </a>
        <a className="hover:text-white" href="#Corporativo">
          Informações corporativas
        </a>
        <a className="hover:text-white" href="#Contato">
          Entre em contato
        </a>
      </div>
      <p className="py-4 text-center text-red-500">
        © 1997 - {today.getFullYear()} Imagiflix, Inc.
      </p>
    </footer>
  );
};

export default Footer;
