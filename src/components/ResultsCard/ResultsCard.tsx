import React from "react";
import "./ResultsCard.scss";
import Pokeball from "../Pokeball";
import { prefixZeros, capitalize } from "../../helpers/strings";
import { Link } from "react-router-dom";

interface iProps {
  id: string;
  name: string;
  className: string;
  to: string | { pathname: string; state: { [key: string]: any } };
  children: React.ReactNode;
}

const ResultsCard = (props: iProps) => (
  <Link className={`resultsCard ${props.className}`} to={props.to}>
    <Pokeball />
    <span className="id">#{prefixZeros(props.id)}</span>
    <h2 className="title">{capitalize(props.name)}</h2>
    {props.children}
  </Link>
);

export default ResultsCard;
