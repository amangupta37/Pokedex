import React from "react";
import { Search } from "../components/Search.jsx";
import { Container, Title } from "../styles/headerStyle.js";
export const Header = () => {
  return (
    <Container>
      <Title>Pokedex</Title>
      <Search />
    </Container>
  );
};
