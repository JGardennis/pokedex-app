import React from "react";
import "./Page.scss";

interface iProps {
  children: React.ReactNode;
  className: string;
}

const Page = ({ className, children }: iProps) => (
  <div className={`${className} page`}>
    <div className="pokeball">
      <div className="pokeball__button"></div>
    </div>
    {children}
  </div>
);

export default Page;
