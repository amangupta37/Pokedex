/* eslint-disable no-unused-expressions */
import React from "react";
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

export const PokeCard = ({ pokemonDetails }) => {
  console.log(pokemonDetails.types[0].type.name);

  return (
    <CardContainer>
      <Top>
        <PokeName>
          <Id>#{pokemonDetails.id}</Id>

          <Name> {pokemonDetails.name}</Name>
        </PokeName>
        <PokeImage>
          <Image
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonDetails.id}.svg`}
            alt="mc"
          />
        </PokeImage>
      </Top>
      <Bottom>
        <PokemonType>{pokemonDetails.types[0].type.name}</PokemonType>
        <ViewStats>View Stats</ViewStats>
      </Bottom>
    </CardContainer>
  );
};
