import React, { useState, useEffect } from "react";
import { Container, Input } from "../styles/searchStyle";

export const Search = ({ setuserSerchInput }) => {
  const [userInput, setUserInput] = useState("");

  const userSerchInput = (e) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    if (userInput !== "") {
      setuserSerchInput(userInput);
    }
  }, [setuserSerchInput, userInput]);

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search Pokemon..."
        onChange={userSerchInput}
      />
    </Container>
  );
};
