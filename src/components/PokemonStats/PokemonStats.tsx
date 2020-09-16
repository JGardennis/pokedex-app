import React from "react";
import { StatBar } from "./PokemonStats.styles";
import { Row, Col } from "react-bootstrap";

interface iProps {
  stats: {
    name: string;
    value: number;
  }[];
  type: string;
}

const PokemonStats: React.FC<iProps> = ({ stats, type }: iProps) => {
  const short = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    speed: "SPD",
    "special-attack": "SP-ATK",
    "special-defense": "SP-DEF",
  };

  return (
    <>
      {stats.map(({ name, value }) => (
        <Row key={name}>
          <Col>
            <p>{short[name]}</p>
          </Col>
          <Col>
            <StatBar value={value} type={type} />
          </Col>
        </Row>
      ))}
    </>
  );
};

export default PokemonStats;
