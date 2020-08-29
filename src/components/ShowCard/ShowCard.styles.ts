import styled from "styled-components";
import { Card } from "react-bootstrap";

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

export { StyledCard, PokemonImage };
