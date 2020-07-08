import styled from "styled-components";

const FlexBox = styled.div`
  ${({ direction, align, justify, wrap }) => `
    display: flex;
    flex-direction: ${direction || "initial"};
    align-items: ${align || "initial"};
    justify-content: ${justify || "initial"};
    flex-wrap: ${wrap || "initial"};
  `}
`;

export default FlexBox;
