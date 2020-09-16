import styled from "styled-components";
import { Card, Row } from "react-bootstrap";

const StyledCard = styled(Card)`
  ${({ theme }) => `
    font-family: ${theme.secondaryFont};
    padding: 1rem;
    box-sizing: border-box;
    max-height: 80vh;
    overflow-y: scroll
  `}
`;

const PokemonImage = styled.img`
  max-width: 8em;
`;

const StyledRow = styled(Row)`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

export { StyledCard, PokemonImage, StyledRow };
