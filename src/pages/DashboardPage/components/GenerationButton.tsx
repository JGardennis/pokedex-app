import React from "react";
import Button from "../../../components/Button";
import { LinkContainer } from "react-router-bootstrap";

interface iProps {
  gen: number;
}

const GenerationButton: React.SFC<iProps> = ({ gen }: iProps) => (
  <LinkContainer to={`/pokemon?generation=${gen}`}>
    <Button>Generation {gen}</Button>
  </LinkContainer>
);

export default GenerationButton;
