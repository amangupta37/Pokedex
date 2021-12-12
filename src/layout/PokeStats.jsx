import React from "react";
import { Popup } from "../components/Popup.jsx";
import { Container } from "../styles/pokeStatsStyle.js";

export const PokeStats = ({ managePopup, pokemonStats }) => {
  return (
    <Container>
      <Popup managePopup={managePopup} pokemonStats={pokemonStats} />
    </Container>
  );
};
