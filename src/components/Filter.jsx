import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

export const Filter = ({ setfilterPokemonType }) => {
  const PokemonType = [
    {
      type: "Psychic",
    },
    {
      type: "Bug",
    },
    {
      type: "Normal",
    },
    {
      type: "Steel",
    },
    {
      type: "Ground",
    },
    {
      type: "Fairy",
    },
    {
      type: "Water",
    },
  ];

  const [filterType, setFilterType] = useState("Pokemon Types");
  const userFilterInput = (values) => {
    console.log("this is", values);
    setFilterType(values);
    setfilterPokemonType(values);
  };
  return (
    <DropdownButton id="dropdown-basic-button" title={filterType}>
      {PokemonType.map((val, index) => {
        return (
          <Dropdown.Item key={index} onClick={() => userFilterInput(val.type)}>
            {val.type}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
};
