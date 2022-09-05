import { Kitty } from "../containers/App";

import React from "react";
import Card from "./Card.tsx";

type CardListProps = {
  kitties: Kitty[];
};

const CardList = ({ kitties }: CardListProps) => {
  return (
    <div>
      {kitties.map((user, i) => {
        return (
          <Card
            key={i}
            id={kitties[i].id}
            name={kitties[i].name}
            email={kitties[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
