import React from "react";
import { useCardContext } from "../../context/cards_context";
import CardsItemWrapper from "./CardsItem.styles";
const CardsItem = () => {
  const { cards, removeItem } = useCardContext();

  return (
      <>
        {cards.length > 0
          ? cards.map((card) => {
              return (
                <CardsItemWrapper key={card.id}>
                  <span className="close" onClick={() => removeItem(card?.id)}>X</span>
                  <div>{card?.cardNumber}</div>
                </CardsItemWrapper>
              );
            })
          : null}
      </>
  );
};

export default CardsItem;
