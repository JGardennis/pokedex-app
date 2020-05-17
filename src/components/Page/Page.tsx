import React from "react";
import "./Page.scss";
import Link from "../Link";
import Search from "../Search";
import { iSearchOptions } from "../Search/Search";

interface iProps {
  children: React.ReactNode;
  title: string;
  searchOptions: iSearchOptions;
  landing?: boolean;
  backButton?: boolean;
}

const Page = ({
  children,
  title,
  landing,
  backButton,
  searchOptions,
}: iProps) => (
  <div className={`page ${landing ? "landing" : ""}`}>
    <h1 className="page__title">{title}</h1>
    {backButton && <Link to="/">Back</Link>}
    <Search {...searchOptions} />
    {children}
  </div>
);

export default Page;
