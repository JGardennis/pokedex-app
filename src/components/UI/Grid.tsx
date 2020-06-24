import React from "react";
import FlexBox from "./FlexBox";
import styled from "styled-components";
import { useWindowSize } from "@react-hook/window-size";
import { sizes } from "../Theme";

interface iProps {
  columns: number;
  children: React.ReactNode;
  justify?: "flex-start" | "center" | "flex-end";
  fillEmpty?: React.ReactNode;
}

const Skeleton = styled.div`
  visibility: hidden;
`;

const Grid = (props: iProps) => {
  const cols: React.ReactNode[][] = [];
  const asArray = React.Children.toArray(props.children);
  const remaining = asArray.length % props.columns;
  const [width] = useWindowSize();

  const getColumns = () => {
    // IS LAPTOP OR ABOVE
    if (width > sizes.tablet) {
      return props.columns;
    }
    // IS TABLET
    else if (width > sizes.mobile && width <= sizes.tablet) {
      return 3;
    }
    // IS MOBILE
    else if (width > sizes.small && width <= sizes.mobile) {
      return 2;
    }

    // SMALL DEVICES
    return 1;
  };

  const numOfColumns = getColumns();

  while (asArray.length) {
    if (props.fillEmpty && remaining === asArray.length) {
      while (asArray.length !== numOfColumns) {
        asArray.push(<Skeleton>{props.fillEmpty}</Skeleton>);
      }
    }

    cols.push(asArray.splice(0, numOfColumns));
  }

  return (
    <>
      {cols.map((col, i) => {
        return (
          <FlexBox key={`row-${i}`} justify={props.justify}>
            {col}
          </FlexBox>
        );
      })}
    </>
  );
};

export default Grid;
