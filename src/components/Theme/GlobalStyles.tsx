import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }: any) => theme.background};
        transition: ${({ theme }: any) => theme.transition};
    }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "initial"};
  align-items: ${(props) => props.align || "initial"};
  justify-content: ${(props) => props.justify || "initial"};
`;

export const Pill = styled.div`
  margin: 0.1em 0;
  padding: 0.5em;
  border-radius: 2em;
  width: fit-content;
  max-width: 90px;
  text-align: center;
  background-color: ${(props) => props.color};
`;
