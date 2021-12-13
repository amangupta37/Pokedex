import React, { useState, useEffect } from "react";
import { CardListContainer } from "../styles/pokeCardListStyle";
import Axios from "axios";
import { PokeCard } from "./PokeCard";
import { Preloader } from "../components/Preloader";
Axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

export const PokecardList = ({ userSearchInput, filterPokemonType }) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [allPokemonCharacteristics, setAllPokemonCharacteristics] = useState(
    []
  );

  // const [error, setError] = useState("");
  const [preloader, setPreloader] = useState(false);

  const fetchAllPokemonList = async () => {
    await Axios.get("/pokemon?limit=100&offset=200")
      .then((res) => {
        return setAllPokemon(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllPokemonCharacteristics = (allPokemonList) => {
    const storePokemonCharacteristics = [];
    allPokemonList.map((value) => {
      return Axios.get(value.url).then((res) => {
        return storePokemonCharacteristics.push(res.data);
      });
    });
    setAllPokemonCharacteristics(storePokemonCharacteristics);
  };

  useEffect(() => {
    fetchAllPokemonList();
  }, []);

  useEffect(() => {
    if (allPokemon) {
      getAllPokemonCharacteristics(allPokemon);
    }
  }, [allPokemon]);

  setTimeout(() => {
    setPreloader(true);
  }, 3000);
  return (
    <CardListContainer>
      {preloader === true ? (
        allPokemonCharacteristics
          .filter((value) => {
            if (userSearchInput === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(userSearchInput.toLowerCase())
            ) {
              return value;
            } else if (value.id.toString().includes(userSearchInput)) {
              return value;
            }
          })
          .filter((value) => {
            if (filterPokemonType === "" || filterPokemonType === "All") {
              return value;
            } else if (
              value.types[0].type.name
                .toLowerCase()
                .includes(filterPokemonType.toLowerCase())
            ) {
              return value;
            }
          })
          .map((value, index) => {
            return <PokeCard key={index} pokemonDetails={value} />;
          })
      ) : (
        <Preloader />
      )}
    </CardListContainer>
  );
};
