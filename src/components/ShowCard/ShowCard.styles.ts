import styled from "styled-components";
import { Card } from "react-bootstrap";

const StyledCard = styled(Card)`
  ${({ theme }) => `
    font-family: ${theme.secondaryFont};
    padding: 1rem;
    box-sizing: border-box;
  `}
`;

export { StyledCard };
