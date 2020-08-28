import React from "react";
import { Card } from "react-bootstrap";
import { useTheme } from "styled-components";
import { StyledContainer } from "./PokemonCardStyles";
import { Pokemon } from "../../../../../helpers/types";
import { capitalize } from "../../../../../helpers/strings";

interface iProps {
  data: Pokemon;
}

const PokemonCard: React.SFC<iProps> = ({ data }: iProps) => {
  const theme = useTheme();
  const type = theme.id.toLowerCase();

  return (
    <StyledContainer to={{ pahtname: `/pokemon/${data.id}`, state: { data } }}>
      <Card bg={type} text={type === "light" ? "dark" : "white"}>
        <Card.Body>
          <Card.Title>{capitalize(data.name)}</Card.Title>
        </Card.Body>
      </Card>
    </StyledContainer>
  );
};

export default PokemonCard;
