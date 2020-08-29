import styled from "styled-components";
import { Layout } from "../../../UI";
import { pokemonTypes } from "../../../Theme";

const StyledLayout = styled(Layout)`
  ${({ theme }) => `
    height: 95vh;
    padding-top: 5em;
    box-sizing: border-box;
    position: relative;

    h1 {
      font-size: 2em;
      font-family: ${theme.secondaryFont};
      color: ${theme.text};
      margin-bottom: 0.5em;
    }

    p {
      display: block;
      line-height: 1.5em;
      max-width: 500px;
    }
  `}
`;

const TypeBox = styled.span`
  ${({ theme, type }) => {
    const color = pokemonTypes[type].primary;

    return `
      padding: 0.5em;
      display: inline-block;
      background-color: ${theme.id === "dark" ? theme.background : color};
      margin-right: 1em;
      margin-bottom: 1em;
      font-size: 0.8em;
      color: #fff;
      border: 1px solid ${theme.id === "dark" ? color : theme.background};
      border-radius: 3px;
      width: 50px;
      text-align: center;
      height: 15px;
      line-height: 15px;
      transition: ${theme.transition};
    `;
  }}
`;

const AbilitiesBox = styled.div`
  &,
  div {
    margin: 1em 0;
  }

  h3 {
    margin-bottom: 0.5em;
    text-decoration: underline;
  }

  p {
    font-size: 0.8em;
  }
`;

const FloatButton = styled.button`
  ${({ theme, position }) => `
    cursor: pointer;
    position: fixed;
    z-index: 99;
    ${position}: 2em;
    bottom: 2em;
    width: 100px;
    height: 40px;
    background-color: ${theme.cardBackground};
    border-radius: 5px;
    box-shadow: ${theme.boxShadow};

    span {
      position: absolute;
      left: 10%;
      top: 0;
      bottom: 0;
      margin: auto;
      display: block;
      line-height: 40px;
    }

    img {
      position: absolute;
      width: 60px;
      top: -30%;
      right: -10%;
    }
  `}
`;

export { StyledLayout, TypeBox, AbilitiesBox, FloatButton };
