import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";

const StyledContainer = styled(LinkContainer)`
  ${({ theme }) => `
        width: 100%;
        max-width: 200px;
        margin: 0.5em;
        padding: 1em;
        box-sizing: border-box;
        border-radius: 5px !important;
        border: none !important;
    `}
`;

export { StyledContainer };
