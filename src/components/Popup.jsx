import React from "react";
import {
  PopUpContainer,
  ClosePopUp,
  StatsContainer,
  CloseIcon,
  Title,
  PokemonStats,
  PokemonModel,
  PokemonImage,
  PokemonStrength,
  PokemonStrengthGraph,
  Image,
  PokemonStatsCont,
  PokemonActiveStrengthGraph,
} from "../styles/popupStyle.js";
export const Popup = ({ managePopup, pokemonStats }) => {
  const closePopup = () => {
    managePopup(false);
  };

  return (
    <PopUpContainer>
      <ClosePopUp onClick={closePopup}>
        <CloseIcon
          src="https://img.icons8.com/ios-glyphs/240/000000/delete-sign.png"
          alt="close"
        />
      </ClosePopUp>
      <StatsContainer>
        <Title>Pokemon Statistics</Title>
        <PokemonStats>
          <PokemonStatsCont>
            {pokemonStats.stats.map((val, index) => {
              return (
                <PokemonModel key={index}>
                  <PokemonStrength>
                    {val.stat.name} ({val.base_stat})
                  </PokemonStrength>
                  <PokemonStrengthGraph>
                    <PokemonActiveStrengthGraph
                      level={val.base_stat}
                    ></PokemonActiveStrengthGraph>
                  </PokemonStrengthGraph>
                </PokemonModel>
              );
            })}
          </PokemonStatsCont>
          <PokemonImage>
            <Image
              src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonStats.id}.svg`}
              alt="pokemon_Image"
            />
          </PokemonImage>
        </PokemonStats>
      </StatsContainer>
    </PopUpContainer>
  );
};
