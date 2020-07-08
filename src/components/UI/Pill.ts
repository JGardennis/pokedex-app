import styled from "styled-components";

const Pill = styled.div`
  ${({ color, theme }) => `
    margin: 0.1em 0;
    padding: 0.5em;
    border-radius: 2em;
    width: fit-content;
    max-width: 90px;
    text-align: center;
    background-color: ${theme.id === "dark" ? "transparent" : color};
    ${theme.id === "dark" && `border: 1px solid ${color}`}
  `}
`;

export default Pill;
