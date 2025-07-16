import React from "react";
import Card from "./card";
import { CardGridProps } from "@/utils/types";

function CardGridView(cardProps: CardGridProps) {
  const { cards } = cardProps;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cards.map((card,index) => (
        <Card key={index} title={card?.title} description={card?.description} link={card?.link} />
      ))}
    </div>
  );
}

export default CardGridView;
