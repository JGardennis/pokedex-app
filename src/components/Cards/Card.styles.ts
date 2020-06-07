import styled from "styled-components";

export const CardWrap = styled.div`
  display: inline-block;
  position: relative;
  width: 230px;
  height: 200px;
  margin: 1em;
  box-shadow: 0px 0px 3px 0px rgba(162, 162, 162, 0.75);
  font-family: ${({ theme }: any) => theme.secondaryFont};
  padding: 1em;
  border-radius: 5px;
  background-color: ${(props: any) => props.bgColor};

  a {
    text-decoration: none;
    color: #fff;
  }

  .pills {
    display: flex;
    flex-direction: column;
    margin-top: 3em;
  }

  .pill {
    margin: 0.1em 0;
    padding: 0.5em;
    border-radius: 2em;
    width: 90px;
    display: block;
    text-align: center;
    background-color: ${(props: any) => props.pillColor};
  }
`;

export const CardTitle = styled.h2`
  margin-top: 2em;
  font-size: 1.2em;
  font-weight: 500;
`;

export const CardImage = styled.div`
  position: absolute;
  top: 20px;
  right: 0px;
  z-index: 10;
  width: 8em;

  img {
    width: 100%;
    height: 100%;
  }
`;
