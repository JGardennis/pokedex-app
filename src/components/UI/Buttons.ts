import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

const Button = styled.button`
  ${({ theme, cta, center }) => `
    padding: 0.5em;
    border-radius: 3px;
    font-family: rubik, sans-serif;
    color: ${theme.text};
    background-color: ${theme.pokeball};
    box-shadow: ${theme.boxShadow};

    ${
      cta &&
      `
      display: block;
      margin: 2em ${center ? "auto" : ""};
      min-width: 8em;
      font-size: 1em;
    `
    }
  `}
`;

const Link = styled(ReactLink)`
  text-decoration: none;
  color: #fff;

  button {
    display: block;
  }
`;

export { Button, Link };
