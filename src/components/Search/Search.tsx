import React from "react";
import "./Search.scss";
import { ReactComponent as SearchSVG } from "../../assets/Icons/search-icon.svg";

const Search = () => (
  <div className="search-bar">
    <SearchSVG />
    <input
      className="search-bar__input"
      placeholder="Search for pokemon, moves, and abilities"
    />
  </div>
);

export default Search;
