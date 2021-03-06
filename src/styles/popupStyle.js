import styled from "styled-components";

export const PopUpContainer = styled.section`
  width: 800px;
  height: 500px;
  background: #fff;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  @media only screen and (min-width: 0px) and (max-width: 380px) {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    border-radius: 0rem;
  }
  @media only screen and (min-width: 381px) and (max-width: 600px) {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    border-radius: 0rem;
  }
  @media only screen and (min-width: 601px) and (max-width: 900px) {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    border-radius: 0rem;
  }
`;

export const ClosePopUp = styled.section`
  width: 80px;
  height: 80px;
  cursor: pointer;
  padding: 1rem;

  @media only screen and (min-width: 0px) and (max-width: 380px) {
    width: 60px;
    height: 60px;
  }
  @media only screen and (min-width: 381px) and (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
  @media only screen and (min-width: 601px) and (max-width: 900px) {
    width: 70px;
    height: 70px;
  }
`;
export const CloseIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const StatsContainer = styled.section`
  width: 100%;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  text-decoration: underline;
  color: #07234c; ;
`;

export const PokemonStats = styled.section`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  @media only screen and (min-width: 0px) and (max-width: 380px) {
    flex-direction: column;
    flex-direction: column-reverse;
  }

  @media only screen and (min-width: 381px) and (max-width: 600px) {
    flex-direction: column;
    flex-direction: column-reverse;
  }
  @media only screen and (min-width: 601px) and (max-width: 900px) {
    flex-direction: column;
    flex-direction: column-reverse;
  }
`;

export const PokemonStatsCont = styled.section`
  width: 100%;
`;

export const PokemonModel = styled.section`
  width: 100%;

  display: flex;
  padding: 1rem;
  gap: 1rem;
  @media only screen and (min-width: 0px) and (max-width: 380px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 381px) and (max-width: 600px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 601px) and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const PokemonImage = styled.section`
  width: 50%;
  height: 300px;

  padding: 1rem;
  padding-right: 2rem;

  @media only screen and (min-width: 0px) and (max-width: 380px) {
    padding: 0rem;
    padding-right: 0rem;
    margin: 0 auto;
  }

  @media only screen and (min-width: 381px) and (max-width: 600px) {
    padding: 0rem;
    padding-right: 0rem;
    margin: 0 auto;
  }

  @media only screen and (min-width: 601px) and (max-width: 900px) {
    padding: 0rem;
    padding-right: 0rem;
    margin: 0 auto;
  }
`;
export const PokemonStrength = styled.section`
  width: 70%;
  height: 30px;

  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  padding-left: 1rem;
`;
export const PokemonStrengthGraph = styled.section`
  background: #3335;
  height: 20px;
  width: 100%;
`;
export const PokemonActiveStrengthGraph = styled.section`
  background: #d33043;
  height: 20px;
  width: ${(props) => (props.level ? (props.level / 200) * 100 : "auto")}%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
