import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";
import { queries } from "../Theme";

export const MenuButtonWrap = styled(ReactLink)`
  position: relative;
  width: 100%;
  max-width: 230px;
  height: 60px;
  display: inline-block;
  line-height: 1.8;
  align-items: center;
  border-radius: 15px;
  padding: 0 1em;
  text-decoration: none;
  font-size: 2em;
  color: #fff;
  margin: 0.2em;
  font-family: ${({ theme }: any) => theme.primaryFont};
  transition: ${({ theme }: any) => theme.transition};
  overflow: hidden;

  &:hover {
    box-shadow: 1px 1px 8px ${(props: any) => props.primary};
  }

  background-color: ${(props: any) => props.primary};
`;

export const LinkButton = styled(ReactLink)`
  display: block;
  font-family: ${({ theme }: any) => theme.primaryFont};
  letter-spacing: 1px;
  text-decoration: none;
  color: ${({ theme }: any) => theme.text};
  margin: 1em;
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: #fff;

  button {
    display: block;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 0.5em;
  border-radius: 3px;
  font-family: rubik, sans-serif;
  color: ${({ theme }: any) => theme.text};
  background-color: ${({ theme }: any) => theme.pokeball};
  box-shadow: ${({ theme }: any) => theme.boxShadow};
  ${(props: any) => props.center && "margin: 0 auto;"}
  ${(props: any) =>
    props.cta &&
    `
    display: block;
    margin: 2em ${props.center ? "auto" : ""};
    width: 8em;
    font-size: 1em;
  `}
`;

export const ThemeButton = styled(Button)`
  position: fixed;
  top: 1em;
  left: 1em;

  ${queries.laptop} {
    left: unset;
    right: 1em;
    z-index: 2;
  }
`;
