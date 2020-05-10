import React from "react";
import "./Pokeball.scss";

interface iProps {
  className?: string;
}

const Pokeball = ({ className }: iProps) => (
  <div className={`pokeball ${className || ""}`}>
    <div className="pokeball__button"></div>
  </div>
);

export default Pokeball;
