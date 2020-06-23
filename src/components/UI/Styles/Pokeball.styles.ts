import styled from "styled-components";

const StyledPokeball = styled.div`
  ${({ theme, color, altColor }) => `
        top: 5px;
        left: 10px;
        width: 50px;
        height: 50px;
        z-index: 1;
        position: absolute;
        border-radius: 50%;
        overflow: hidden;
        transition: ${theme.transition};
        background-color: ${altColor || theme.pokeball};

        &::before,
        &::after {
            content: "";
            position: absolute;
            width: 100%;
            transition: ${theme.transition};
        }

        &::before {
            background-color: ${altColor || theme.pokeball};
            height: 50%;
        }

        &::after {
            top: calc(50% - 5px);
            left: 0;
            height: 10px;
            background-color: ${color || theme.background};
        }

        .inner {
            position: absolute;
            top: calc(50% - 13px);
            left: calc(50% - 13px);
            width: 15px;
            height: 15px;
            border-width: 5px;
            border-style: solid;
            background-color: ${altColor || theme.pokeball};
            border-color: ${color || theme.background};
            border-radius: 50%;
            z-index: 10;
            transition: ${theme.transition};
        }
    `}
`;

export { StyledPokeball };
