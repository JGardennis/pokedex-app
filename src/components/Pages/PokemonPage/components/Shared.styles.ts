import styled from "styled-components";
import { Layout } from "../../../UI";

const StyledLayout = styled(Layout)`
  ${({ theme }) => `
    margin-top: 5em;

    h1 {
      font-size: 2em;
      font-family: ${theme.secondaryFont};
      color: ${theme.text};
      margin: 1em 0;
    }
  `}
`;

export { StyledLayout };
