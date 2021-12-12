/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import {
  CardContainer,
  Top,
  Bottom,
  PokeName,
  PokeImage,
  Image,
  Name,
  Id,
  PokemonType,
  ViewStats,
} from "../styles/pokeCardStyle.js";
import { PokeStats } from "./PokeStats.jsx";

export const PokeCard = ({ pokemonDetails }) => {
  const [showPokeStatsPoup, setShowPokeStatsPoup] = useState(false);
  const showPokeStats = () => {
    setShowPokeStatsPoup(true);
  };

  return (
    <>
      <CardContainer>
        <Top>
          <PokeName>
            <Id>#{pokemonDetails.id}</Id>
            <Name> {pokemonDetails.name}</Name>
          </PokeName>
          <PokeImage>
            <Image
              src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonDetails.id}.svg`}
              alt="pokemon_Image"
            />
          </PokeImage>
        </Top>
        <Bottom>
          <PokemonType>{pokemonDetails.types[0].type.name}</PokemonType>
          <ViewStats onClick={showPokeStats}>View Stats</ViewStats>
        </Bottom>
      </CardContainer>
      {showPokeStatsPoup === true ? (
        <PokeStats
          managePopup={setShowPokeStatsPoup}
          pokemonStats={pokemonDetails}
        />
      ) : null}
    </>
  );
};
