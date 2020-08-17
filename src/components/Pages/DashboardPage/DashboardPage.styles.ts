import styled from "styled-components";
import { queries } from "../../../Theme";
import { Title } from "../../UI";

const Container = styled.div`
  width: 560px;
  margin: 0 auto;
  overflow: hidden;

  ${queries.mobile} {
    width: 100%;
    text-align: center;
  }
`;

const StyledTitle = styled(Title)`
  margin-top: 1em;
  margin-bottom: 0.5em;

  ${queries.mobile} {
    margin-top: 0;
    text-align: center;
  }
`;

export { Container, StyledTitle };
