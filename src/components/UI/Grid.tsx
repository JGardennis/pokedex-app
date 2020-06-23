import React from "react";
import FlexBox from "./FlexBox";
import styled from "styled-components";
import { queries } from "../Theme";

interface iProps {
  columns: number;
  children: React.ReactNode;
  justify?: "flex-start" | "center" | "flex-end";
}

const Row = styled(FlexBox)`
  ${queries.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const Grid = (props: iProps) => {
  const cols: React.ReactNode[] = [];
  const asArray = React.Children.toArray(props.children);

  while (asArray.length) {
    cols.push(asArray.splice(0, props.columns));
  }

  return (
    <>
      {cols.map((col) => (
        <Row justify={props.justify}>{col}</Row>
      ))}
    </>
  );
};

export default Grid;
