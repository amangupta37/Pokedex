import React from "react";
import { Filter } from "../components/Filter.jsx";
import { Search } from "../components/Search.jsx";
import { Container, Title, Wrapper } from "../styles/headerStyle.js";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = ({ setuserSerchInput, setfilterPokemonType }) => {
  return (
    <Container>
      <Title>Pokedex</Title>

      <Search setuserSerchInput={setuserSerchInput} />
      <Wrapper>
        <Filter setfilterPokemonType={setfilterPokemonType} />
      </Wrapper>
    </Container>
  );
};
