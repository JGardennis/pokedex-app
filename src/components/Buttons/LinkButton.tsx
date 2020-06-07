import React from "react";
import { LinkButtonWrap } from "./Buttons.styles";

interface iProps {
  to: string | { pathname: string; state?: { [key: string]: any } };
  children: React.ReactNode;
  className?: string;
}

const LinkButton = ({ to, children }: iProps) => (
  <LinkButtonWrap to={to}>{children}</LinkButtonWrap>
);

export default LinkButton;
