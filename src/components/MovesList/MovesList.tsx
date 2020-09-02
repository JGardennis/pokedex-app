import React, { useState } from "react";
import { PokemonMove } from "../../helpers/types";
import { Row, Col } from "react-bootstrap";
import { Move } from "./MovesList.styles";
import { capitalize } from "../../helpers/strings";
import Button from "../Button";

interface iProps {
  moves: {
    levelUp: PokemonMove[];
    machine: PokemonMove[];
    tutor: PokemonMove[];
    egg: PokemonMove[];
  };
}

const MovesList: React.SFC<iProps> = ({ moves }: iProps) => {
  const [list, setList] = useState<PokemonMove[]>(moves.levelUp);

  return (
    <Row>
      <Col>
        <h2>Moves</h2>

        <Row>
          {moves.levelUp.length > 0 && (
            <Button onClick={() => setList(moves.levelUp)}>Level Up</Button>
          )}

          {moves.machine.length > 0 && (
            <Button onClick={() => setList(moves.machine)}>TM / HM</Button>
          )}

          {moves.tutor.length > 0 && (
            <Button onClick={() => setList(moves.tutor)}>Tutor</Button>
          )}

          {moves.egg.length > 0 && (
            <Button onClick={() => setList(moves.egg)}>Egg</Button>
          )}
        </Row>

        {list.map((move) => (
          <Move key={move.name} type={move.type}>
            <h2>{capitalize(move.name).replace(/[-]/g, " ")}</h2>
            <span>Lvl 1</span>
          </Move>
        ))}
      </Col>
    </Row>
  );
};

export default MovesList;
