import React from "react";
import { useCardContext } from "../../context/cards_context";
import Button from "../Button";
import HeaderWrapper from "./Header.styles";

const Header = () => {
  const { addToCard,sortCardLowest,sortCardHighest,clearAll } = useCardContext();
  return (
    <HeaderWrapper>
      <Button title={"Add Card"} onClick={addToCard} />
      <Button title={"Sort Card Lowest"} onClick={sortCardLowest} />
      <Button title={"Sort Card Highest"} onClick={sortCardHighest} />
      <Button title={"Clear All"} onClick={clearAll} />
    </HeaderWrapper>
  );
};

export default Header;
