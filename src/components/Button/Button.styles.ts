import styled from "styled-components";
import Button from "react-bootstrap/Button";

const StyledButton = styled(Button)`
  ${({ theme }) => `
    &:focus {
        box-shadow: initial;
    }

    border: none;
    font-family: ${theme.primaryFont};

    &.btn-light {
      background-color: #e6e6e6;
      box-shadow: ${theme.boxShadow};
    }

    &.btn-light:hover {
      background-color: #e2e6ea;
    }

    &.btn-dark:hover {
      background-color: #404244;
    }
  `}
`;

export { StyledButton };
