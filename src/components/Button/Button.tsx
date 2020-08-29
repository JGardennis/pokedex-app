import React from "react";
import { Spinner } from "react-bootstrap";
import { useTheme } from "styled-components";
import { StyledButton } from "./Button.styles";
import { LinkContainer } from "react-router-bootstrap";

interface iProps {
  children: React.ReactNode;
  to?: string;
  size?: "sm" | "lg";
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Button: React.SFC<iProps> = ({
  children,
  to,
  size,
  loading,
  onClick,
}) => {
  const theme = useTheme();

  const Comp = (
    <StyledButton
      size={size || "sm"}
      variant={theme.id}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      ) : (
        children
      )}
    </StyledButton>
  );

  if (to) {
    return <LinkContainer to={to}>{Comp}</LinkContainer>;
  }

  return Comp;
};
export default Button;
