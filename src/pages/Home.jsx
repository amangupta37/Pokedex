import React, { useState } from "react";
import { Header } from "../layout/Header";
import { PokecardList } from "../layout/PokecardList";

export const Home = () => {
  const [userSerchInput, setuserSerchInput] = useState("");

  console.log(userSerchInput);

  return (
    <>
      <Header setuserSerchInput={setuserSerchInput} />
      <PokecardList userSearchInput={userSerchInput} />
    </>
  );
};
