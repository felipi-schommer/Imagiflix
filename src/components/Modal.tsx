import React from "react";
import emitter from "../utils/eventEmitter";
import CONST from "../data/constants";

import { FontAwesomeIcon } from " ";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import Score from "./Score";

const Modal = ({
  poster_path,
  title,
  original_title,
  name,
  original_name,
  overview,
  vote_average,
  number_of_seasons,
  runtime,
  video,
}: any) => {
  const { IMAGEURL } = CONST;

  const handleClick = () => {
      emitter.emit(CONST.EVENTS.ModalClose);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen grid place-items-center">
      <article className=" shadow-lg w-5/6 h-5/6 grid grid-flow-cols grid-cols-2 p-4 bg-black bg-opacity-75 place-items-center ">
        <img
          
          src={`${IMAGEURL}/w500/${poster_path}`}
          alt={title ? title : name}
        />
        <div className="top-0 left-0 relative h-full">
          <FontAwesomeIcon
            className="-mt-3 -mr-2 cursor-pointer absolute text-red-500 top-0 right-0"
            icon={faTimesCircle}
            size="2x"
            onClick={handleClick}
          />
          <h2 className="uppercase font-bold text-3xl pt-6">
            {title ? title : name}
          </h2>
          <h6 className="italic font-bold pb-12">
            {original_title ? original_title : original_name}
          </h6>
          <p className="pb-12">{overview} </p>
          <Score value={vote_average} />
          <span className="ml-6 rounded-full py-2 px-6 bg-red-500 mr-3">
            {runtime ? `${runtime} min` : `${number_of_seasons} temporadas`}
          </span>
          {`Video:  ${video ? video : 'Não contém Trailer.'}`}
        </div>
      </article>
    </div>
  );
};

export default Modal;
