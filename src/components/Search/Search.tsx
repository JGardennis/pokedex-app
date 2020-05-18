import React from "react";
import "./Search.scss";
import { ReactComponent as SearchSVG } from "../../assets/Icons/search-icon.svg";

export interface iSearchOptions {
  placeholder?: string;
  hide?: boolean;
}

const Search = ({ placeholder, hide }: iSearchOptions) => {
  if (hide) {
    return null;
  }

  return (
    <div className="search-bar">
      <SearchSVG />
      <input className="search-bar__input" placeholder={placeholder} />
    </div>
  );
};

export default Search;
