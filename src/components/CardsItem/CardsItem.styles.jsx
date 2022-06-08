import styled from "styled-components";

const CardsItemWrapper = styled.article`
  position: relative;
  max-width: 400px;
  width: 100%;
  max-height: 190px;
  height: 100%;
  border: 1px solid #000;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  & .close {
    position: absolute;
    top: 0;
    right: 10px;
    cursor: pointer;
  }
`;

export default CardsItemWrapper;
