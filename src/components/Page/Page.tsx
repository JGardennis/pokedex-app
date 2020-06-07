import React from "react";
import "./Page.scss";
import Search from "../Search";
import { iSearchOptions } from "../Search/Search";
import { LinkButton } from "../Buttons";

interface iProps {
  children: React.ReactNode;
  title?: string;
  searchOptions: iSearchOptions;
  className?: string;
  backButton?: boolean;
}

const Page = ({
  children,
  title,
  className,
  backButton,
  searchOptions,
}: iProps) => {
  return (
    <div className={`page ${className || ""}`}>
      {title && <h1 className="page__title">{title}</h1>}
      {backButton && <LinkButton to="/">Back</LinkButton>}
      {<Search {...searchOptions} />}
      {children}
    </div>
  );
};

export default Page;
