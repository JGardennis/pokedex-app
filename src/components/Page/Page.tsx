import React from "react";
import "./Page.scss";
import Pokeball from "../Pokeball";

interface iProps {
  children: React.ReactNode;
  className: string;
  title: string;
}

const Page = ({ className, children, title }: iProps) => (
  <div className={`${className} page`}>
    <Pokeball className="large" />
    <h1>{title}</h1>
    {children}
  </div>
);

export default Page;
