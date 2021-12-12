import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 150px;
  display: grid;
  place-items: center;
`;
export const Input = styled.input`
  width: 50%;
  height: 50px;
  border: 2px solid yellow;
  background: #fff1;
  border-radius: 0.5rem;
  padding: 1.5rem;
  outline: none;
  font-size: 1.2rem;
  color: yellow;
  @media only screen and (min-width: 0px) and (max-width: 380px) {
    width: 90%;
  }
  @media only screen and (min-width: 390px) and (max-width: 610px) {
    width: 90%;
  }
  @media only screen and (min-width: 611px) and (max-width: 900px) {
    width: 70%;
  }
`;
