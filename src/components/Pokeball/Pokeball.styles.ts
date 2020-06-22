import styled from "styled-components";

export const PokeballWrap = styled.div`
  top: ${(props: any) => (props.large ? "10%" : "5px")};
  right: ${(props: any) => (props.large ? "10%" : "10px")};
  width: ${(props: any) => (props.large ? "400px" : "50px")};
  height: ${(props: any) => (props.large ? "400px" : "50px")};
  z-index: ${(props: any) => (props.large ? "-1" : "1")};
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  transition: 0.4s all ease;
  background-color: ${({ theme, secondary }: any) =>
    secondary || theme.pokeball};

  &::before,
  &::after {
    content: "";
    position: absolute;
    transition: ${({ theme }: any) => theme.transition};
  }

  &::before {
    background-color: ${({ theme, secondary }: any) =>
      secondary || theme.pokeball};
    width: 100%;
    height: 50%;
  }

  &::after {
    top: calc(50% - 5px);
    left: 0;
    width: 100%;
    height: 10px;
    background-color: ${({ theme, primary }: any) =>
      primary || theme.background};
  }
`;

export const Inner = styled.div`
  ${(props: any) =>
    props.large
      ? `
      top: calc(50% - 130px);
      left: calc(50% - 130px);
      width: 140px;
      height: 140px;
      border: 60px solid;`
      : `
        top: calc(50% - 13px);
        left: calc(50% - 13px);
        width: 15px;
        height: 15px;
        border: 5px solid;
    `}
  position: absolute;
  background-color: ${({ theme, secondary }: any) =>
    secondary || theme.pokeball};
  border-color: ${({ theme, primary }: any) => primary || theme.background};
  border-radius: 50%;
  z-index: 10;
  transition: ${({ theme }: any) => theme.transition};
`;
