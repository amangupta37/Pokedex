import React, { useState } from "react";
import { Header } from "../layout/Header";
import { PokecardList } from "../layout/PokecardList";

export const Home = () => {
  const [userSerchInput, setuserSerchInput] = useState("");

  const [filterPokemonType, setfilterPokemonType] = useState("");

  console.log(userSerchInput);

  return (
    <>
      <Header
        setuserSerchInput={setuserSerchInput}
        setfilterPokemonType={setfilterPokemonType}
      />
      <PokecardList
        userSearchInput={userSerchInput}
        filterPokemonType={filterPokemonType}
      />
    </>
  );
};
