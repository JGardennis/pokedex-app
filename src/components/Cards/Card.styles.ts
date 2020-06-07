import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardWrap = styled(Link)`
  display: inline-block;
  position: relative;
  width: 230px;
  height: 200px;
  margin: 1em;
  box-shadow: 0px 0px 3px 0px rgba(162, 162, 162, 0.75);
  font-family: ${({ theme }: any) => theme.secondaryFont};
  padding: 1em;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props: any) => props.backgroundColor};
`;

export const CardTitle = styled.h2`
  margin-top: 2em;
  font-size: 1.2em;
  font-weight: 500;
`;

export const CardImage = styled.div`
  position: absolute;
  top: 20px;
  right: 0px;
  z-index: 10;
  width: 8em;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CardPills = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3em;
`;

export const CardPill = styled.span`
  margin: 0.1em 0;
  padding: 0.5em;
  border-radius: 2em;
  width: ${(props: any) => props.width || "90px"};
  display: block;
  text-align: center;
`;
