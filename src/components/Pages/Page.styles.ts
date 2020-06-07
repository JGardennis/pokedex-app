import styled from "styled-components";

export const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${(props: any) => (props.wide ? "1200px" : "800px")};
  margin: 0 auto;
  height: 100%;
  margin-top: ${(props: any) => (props.landingPage ? "30vh" : "10vh")};
  transition: 0.4s all ease;

  ${(props: any) => props.landingPage && "margin-top: 30vh;"}
`;

export const PageTitle = styled.h1`
  font-family: ${({ theme }: any) => theme.primaryFont};
  font-size: 3em;
  color: ${({ theme }: any) => theme.text};
  transition: ${({ theme }: any) => theme.transition};
`;
