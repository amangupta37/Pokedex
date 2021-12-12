import styled from "styled-components";

export const CardListContainer = styled.section`
  width: 100%;
  padding: 2rem;
  ${"" /* background: red; */}
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 5rem;
  grid-column-gap: 2rem;

  @media only screen and (min-width: 0px) and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;
    margin-top: 2rem;
    padding: 0;
  }
  @media only screen and (min-width: 390px) and (max-width: 610px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;
    margin-top: 2rem;
    padding: 0;
  }

  @media only screen and (min-width: 611px) and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;
    margin-top: 2rem;
    padding: 0;
  }
  @media only screen and (min-width: 901px) and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;
    margin-top: 2rem;
    padding: 0;
  }
`;
