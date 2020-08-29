import React from "react";
import { capitalize } from "../../../../helpers/strings";
import { AbilitiesBox } from "./Shared.styles";

interface iProps {
  items: {
    name: string;
    description: string;
  }[];
}

const Abilities = ({ items }: iProps) => {
  if (!items) {
    return null;
  }

  return (
    <AbilitiesBox>
      {items.map(({ name, description }) => (
        <div key={name}>
          <h3>{capitalize(name)}</h3>
          <p>{description}</p>
        </div>
      ))}
    </AbilitiesBox>
  );
};

export default Abilities;
