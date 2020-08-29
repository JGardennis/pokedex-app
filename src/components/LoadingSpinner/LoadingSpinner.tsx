import React from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";
import { useTheme } from "styled-components";

const StyledSpinner = styled(Spinner)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const LoadingSpinner: React.SFC = () => {
  const theme = useTheme();

  return (
    <StyledSpinner
      animation="border"
      role="status"
      aria-hidden="true"
      variant={theme.id === "light" ? "dark" : "light"}
    />
  );
};

export default LoadingSpinner;
