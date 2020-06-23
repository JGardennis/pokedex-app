import styled from "styled-components";
import { queries } from "../Theme";

const Title = styled.h1`
  ${({ theme }) => `
        font-family: ${theme.primaryFont};
        font-size: 3em;
        color: ${theme.text};
        transition: ${theme.transition};
    `}

  ${queries.mobile} {
    font-size: 2.5em;
  }
`;

export default Title;
