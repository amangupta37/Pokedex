import React, { useState, useEffect } from "react";
import { CardListContainer } from "../styles/pokeCardListStyle";
import Axios from "axios";
import { PokeCard } from "./PokeCard";
Axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

export const PokecardList = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [pokemonCrad, setPokemonCard] = useState([]);
  const [preloader, setPreloader] = useState(false);

  const fetchAllPokemonList = async () => {
    await Axios.get("/pokemon?limit=100&offset=200").then((res) => {
      return setAllPokemon(res.data.results);
    });
  };

  const pokemonList = (datap) => {
    const arr = [];
    datap.map((v) => {
      return Axios.get(v.url).then((res) => {
        return arr.push(res.data);
      });
    });
    setPokemonCard(arr);
  };

  useEffect(() => {
    fetchAllPokemonList();
  }, []);

  useEffect(() => {
    if (allPokemon) {
      pokemonList(allPokemon);
    }
  }, [allPokemon]);

  setTimeout(() => {
    setPreloader(true);
  }, 2000);

  return (
    <CardListContainer>
      {preloader === true
        ? pokemonCrad.map((value, index) => {
            return <PokeCard key={index} pokemonDetails={value} />;
          })
        : "loading"}
    </CardListContainer>
  );
};
