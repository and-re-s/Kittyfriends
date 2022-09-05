import React from "react";

import Kitty from "../containers/App.tsx";

import "./Card.css";

type CardProps = {
  kitty: Kitty;
};

const Card = (kitty: CardProps) => {
  const { name, email, id } = kitty;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="kitty_photo"
        height={200}
        width={200}
        className="flex center"
        src={`https://robohash.org/${id}?set=set4`}
      />
      <div>
        <h2 className="tc">{name}</h2>
        <p className="tc">{email}</p>
      </div>
    </div>
  );
};

export default Card;
