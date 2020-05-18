import React from "react";
import "./Link.scss";
import { Link as ReactLink } from "react-router-dom";

interface iProps {
  to: string | { pathname: string; state?: { [key: string]: any } };
  children: React.ReactNode;
  className?: string;
}

const Link = ({ to, children, className }: iProps) => (
  <ReactLink to={to} className={`link ${className ? className : ""}`}>
    {children}
  </ReactLink>
);

export default Link;
