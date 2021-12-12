import React from "react";
import { Container } from "../styles/preloaderStyle.js";
export const Preloader = () => {
  return (
    <Container>
      <img
        src="https://flevix.com/wp-content/uploads/2020/01/Web-Preloader.svg"
        alt="preloader"
      />
    </Container>
  );
};
