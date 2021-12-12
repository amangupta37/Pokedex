import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 350px;
  background: #07234c;
`;

export const Title = styled.h1`
  color: yellow;
  text-align: center;
  padding-top: 1.5rem;
  font-size: 3rem;
  text-decoration: underline;
`;

export const Wrapper = styled.h1`
  display: flex;
  padding-right: 5rem;
  flex-direction: row-reverse;

  @media only screen and (min-width: 0px) and (max-width: 380px) {
    display: grid;
    place-items: center;
    padding-right: 0rem;
  }

  @media only screen and (min-width: 390px) and (max-width: 610px) {
    display: grid;
    place-items: center;
    padding-right: 0rem;
  }
  @media only screen and (min-width: 611px) and (max-width: 900px) {
    display: grid;
    place-items: center;
    padding-right: 0rem;
  }
  @media only screen and (min-width: 901px) and (max-width: 1280px) {
    display: grid;
    place-items: center;
    padding-right: 0rem;
  }
`;
