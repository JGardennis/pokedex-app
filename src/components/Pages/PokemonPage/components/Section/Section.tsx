import React from "react";
import { StyledLayout } from "../Shared.styles";

interface iProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: iProps) => (
  <StyledLayout>
    <h1>{title}</h1>
    {children}
  </StyledLayout>
);

export default Section;
