import styled from "styled-components";
import { FlexBox, Pill } from "../../UI";
import { RoundCard } from "../../UI/Styles/Card.styles";

const Header = styled(FlexBox)`
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
  ${({ theme }) => `
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    font-size: 0.8em;
    line-height: 3;
    cursor: pointer;
    color: ${theme.text};
  `}
`;

const PreviousButton = styled(NavButton)`
  left: 10vh;
`;

const NextButton = styled(NavButton)`
  right: 10vh;
`;

export { Header, Pills, StyledPill, PreviousButton, NextButton };
