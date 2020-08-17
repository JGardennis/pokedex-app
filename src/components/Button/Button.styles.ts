import styled from "styled-components";
import Button from "react-bootstrap/Button";

const StyledButton = styled(Button)`
  ${({ theme }) => `
    &:focus {
        box-shadow: initial;
    }

    font-family: ${theme.primaryFont};
  `}
`;

export { StyledButton };
