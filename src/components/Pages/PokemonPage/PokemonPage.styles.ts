import styled from "styled-components";
import { FlexBox, Pill } from "../../UI";
import { RoundCard } from "../../UI/Styles/Card.styles";

const StyledFlexBox = styled(FlexBox)`
  ${({ theme }) => `
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-family: ${theme.primaryFont};
        color: ${theme.text}
    }

    img {
        max-width: 150px;
        margin-bottom: -1em;
    }
  `}
`;

const Pills = styled(FlexBox)`
  margin: 0.5em;
`;

const StyledPill = styled(Pill)`
  font-size: 0.8em;
  color: #fff;
  margin: 0 0.5em;
`;

const NavButton = styled(RoundCard)`
  ${({ theme, position }) => `
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    font-size: 0.8em;
    line-height: 3;
    cursor: pointer;
    color: ${theme.text};
    ${position}: 10vh;
  `}
`;

const Weakness = styled.span`
  ${({ theme, color, altColor }) => `
    display: inline-block;
    margin: 1em;
    background-color: ${theme.id === "dark" ? "transparent" : color};
    border-radius: 5px;
    color: white;
    padding-left: 0.5em;
    cursor: default;

    ${theme.id === "dark" ? `border: 1px solid ${color};` : ""}

    &::after {
      content: "x2";
      margin-left: 1em;
      display: inline-block;
      padding: 0.5em;
      background-color: ${theme.id === "dark" ? "transparent" : color};
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      ${theme.id === "dark" ? `color: ${color};` : ""}
    }
  `}
`;

const Move = styled.div`
  ${({ theme, color, altColor }) => `
    display: inline-block;
    position: relative;
    margin: 1em;
    box-shadow: ${theme.boxShadow};
    border-radius: 5px;
    background-color: ${color};
    ${theme.id === "dark" ? `border: 1px solid ${color};` : ""}
    cursor: default;
    overflow: hidden;

    h3 {
      color: #fff;
      padding: 0.5em;
    }

    span {
      position: absolute;
      font-size: 0.8em;
      top: 5px;
      right: 5px;
      color: #fff;
    }

    p {
      background-color: ${theme.id === "dark" ? theme.cardBackground : "#fff"};
      padding: 0.5em;
      font-size: 0.6em;
      margin-top: 0.5em;
      line-height: 1.5em;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  `}
`;

export { StyledFlexBox, Pills, StyledPill, NavButton, Weakness, Move };
