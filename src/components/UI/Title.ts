import styled from "styled-components";
import { queries } from "../../Theme";

const Title = styled.h1`
  ${({ theme, align }) => `
    font-family: ${theme.primaryFont};
    font-size: 3em;
    color: ${theme.text};
    transition: ${theme.transition};
    text-align: ${align || "left"} ;
    
    ${queries.mobile} {
      font-size: 2.5em;
    }
  `}
`;

export default Title;
