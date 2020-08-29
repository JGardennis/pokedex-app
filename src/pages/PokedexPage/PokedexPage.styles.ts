import styled from "styled-components";
import { FlexBox } from "../../UI";
import { queries } from "../../../Theme";

const Container = styled(FlexBox)`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const Pills = styled(FlexBox)`
  margin-top: 3em;

  div {
    margin-right: 1em;
  }

  ${queries.mobile} {
    margin-top: 5.5em;
  }
`;

export { Container, Pills };
