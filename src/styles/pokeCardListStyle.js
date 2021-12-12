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
`;
