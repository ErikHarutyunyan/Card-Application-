import styled from "styled-components";

const ButtonWrapper = styled.button`
  background: none;
  color: #000;
  padding: 20px;
  outline: inherit;
  border: 1px solid #0000ff;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #0000ff;
    color: #fff;
  }
`;

export default ButtonWrapper;
