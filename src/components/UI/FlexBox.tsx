import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "initial"};
  align-items: ${(props) => props.align || "initial"};
  justify-content: ${(props) => props.justify || "initial"};
  flex-wrap: ${(props) => props.wrap || "initial"};
`;

export default FlexBox;
