import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }: any) => theme.background};
        transition: ${({ theme }: any) => theme.transition};
    }
`;
