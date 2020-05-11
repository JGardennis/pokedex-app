import React from "react";
import "./Page.scss";
import Pokeball from "../Pokeball";
import Link from "../Link";

interface iProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  backButton?: boolean;
}

const Page = ({ className, children, title, backButton }: iProps) => (
  <div className={`${className ? className : ""} page`}>
    {backButton && (
      <Link className="back-button" to="/">
        BACK
      </Link>
    )}
    <Pokeball className="large" />
    <h1>{title}</h1>
    {children}
  </div>
);

export default Page;
