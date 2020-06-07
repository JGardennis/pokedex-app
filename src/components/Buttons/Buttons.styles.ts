import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

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

export const LinkButtonWrap = styled(ReactLink)`
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
`;
