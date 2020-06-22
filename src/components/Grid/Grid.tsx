import React from "react";
import { FlexBox } from "../Theme/GlobalStyles";

interface iProps {
  columns: number;
  children: React.ReactNode;
  justify?: "flex-start" | "center" | "flex-end";
}

const Grid = ({ columns, children, justify }: iProps) => {
  const cols: React.ReactNode[] = [];
  const asArray = React.Children.toArray(children);

  while (asArray.length) {
    cols.push(asArray.splice(0, columns));
  }

  return (
    <div>
      {cols.map((col) => (
        <FlexBox justify={justify}>{col}</FlexBox>
      ))}
    </div>
  );
};

export default Grid;
