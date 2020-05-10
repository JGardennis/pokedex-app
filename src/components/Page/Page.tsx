import React from "react";
import "./Page.scss";
import Pokeball from "../Pokeball";

interface iProps {
  children: React.ReactNode;
  className: string;
}

const Page = ({ className, children }: iProps) => (
  <div className={`${className} page`}>
    <Pokeball className="large" />
    {children}
  </div>
);

export default Page;
