import React from "react";
import { Container, Input } from "../styles/searchStyle";

export const Search = () => {
  return (
    <Container>
      <Input type="text" placeholder="Search Pokemon..." />
    </Container>
  );
};
