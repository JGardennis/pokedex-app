import React from "react";
import "./Search.scss";
import { ReactComponent as SearchSVG } from "../../assets/Icons/search-icon.svg";

interface iProps {
  placeholder: string;
}

export interface iSearchOptions {
  placeholder: string;
}

const Search = ({ placeholder }: iProps) => (
  <div className="search-bar">
    <SearchSVG />
    <input className="search-bar__input" placeholder={placeholder} />
  </div>
);

export default Search;
