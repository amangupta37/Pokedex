import styled from "styled-components";

export const CardContainer = styled.section`
  width: 400px;
  height: 300px;
  padding: 1rem;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;

export const Top = styled.section`
  width: 100%;
  ${"" /* background: red; */}
  display: flex;
`;

export const Bottom = styled.section`
  width: 95%;
  height: 30%;
  ${"" /* background: green; */}
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
`;

export const PokeName = styled.section`
  width: 50%;
  ${"" /* background: blue; */}
  display: grid;
  place-items: center;
  padding: 0.5rem;
`;

export const Name = styled.h1`
  font-size: 2.5rem;
`;

export const Id = styled.h1`
  font-size: 2rem;
`;

export const PokeImage = styled.section`
  width: 300px;
  height: 200px;
  ${"" /* background: yellow; */}
  display: grid;
  place-items: center;
  padding: 0.5rem;
`;
export const Image = styled.img`
  width: 50%;
  heigth: 100%;
`;

export const PokemonType = styled.section`
  background: red;
  width: 120px;
  height: 50px;
  outline: none;
  border-radius: 1.5rem;
  text-align: center;
  padding-top: 0.8rem;
  font-size: 1.2rem;
  color: #ffff;
  background: #07234c;
`;

export const ViewStats = styled.button`
  background: red;
  width: 120px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 1.5rem;
  background: #d33043;
  color: #ffff;
  font-size: 1.1rem;
  cursor: pointer;
`;
