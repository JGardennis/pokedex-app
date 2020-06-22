import styled from "styled-components";
import { Pill } from "../Theme/GlobalStyles";

export const Wrap = styled.div`
  display: inline-block;
  position: relative;
  width: 230px;
  height: 200px;
  margin: 1em;
  box-shadow: ${({ theme }: any) => theme.boxShadow}
  font-family: ${({ theme }: any) => theme.secondaryFont};
  padding: 1em;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  transition: ${({ theme }: any) => theme.transition};

  h2 {
    margin-top: 2em;
    font-size: 1.2em;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 20px;
  right: 0px;
  z-index: 10;
  width: 8em;
`;

export const TypePill = styled(Pill)`
  margin-top: 4em;
  margin-right: 1em;
`;
