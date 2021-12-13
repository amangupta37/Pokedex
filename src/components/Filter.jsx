import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

export const Filter = ({ setfilterPokemonType }) => {
  const PokemonType = [
    {
      type: "All",
    },
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

  const [filterType, setFilterType] = useState("");
  const userFilterInput = (values) => {
    setFilterType(values);
    setfilterPokemonType(values);
  };
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={`Pokemon Type : ${filterType}`}
    >
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
