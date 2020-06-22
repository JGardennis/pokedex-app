import styled from "styled-components";

export const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 10vh;
  transition: 0.4s all ease;
`;

export const PageTitle = styled.h1`
  font-family: ${({ theme }: any) => theme.primaryFont};
  font-size: 3em;
  color: ${({ theme }: any) => theme.text};
  transition: ${({ theme }: any) => theme.transition};
`;
