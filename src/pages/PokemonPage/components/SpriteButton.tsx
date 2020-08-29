import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FloatButton } from "./Shared.styles";
import { getPokemonSprites } from "../../../../helpers/pokeApi";
import { capitalize } from "../../../../helpers/strings";

interface iProps {
  type: "next" | "previous";
  id: string;
}

interface iState {
  data: {
    name: string;
    sprites: {
      back_default: string;
      back_shiny: string;
      front_default: string;
      front_shiny: string;
    };
  } | null;
}

const SpriteButton = ({ type, id }: iProps) => {
  const [state, setState] = useState<iState>({ data: null });
  const history = useHistory();
  const newId = type === "previous" ? +id - 1 : +id + 1;
  const position = type === "previous" ? "left" : "right";

  useEffect(() => {
    const getSprite = async () => {
      const response = await getPokemonSprites(newId);
      setState((s) => ({ ...s, data: response }));
    };

    getSprite();
  });

  if (!state.data) {
    return <FloatButton position={position} />;
  }

  return (
    <FloatButton
      position={position}
      onClick={() => history.push(`/pokemon/${newId}`)}
    >
      <span>{capitalize(state.data.name)}</span>
      <img src={state.data.sprites.front_default} alt={state.data.name} />
    </FloatButton>
  );
};

export default SpriteButton;
