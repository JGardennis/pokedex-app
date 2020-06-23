import styled from "styled-components";

const Pill = styled.div`
  margin: 0.1em 0;
  padding: 0.5em;
  border-radius: 2em;
  width: fit-content;
  max-width: 90px;
  text-align: center;
  background-color: ${(props) => props.color};
`;

export default Pill;
