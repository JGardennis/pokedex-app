import styled from "styled-components";

const StyledPokeball = styled.div`
  ${({ theme, color }) => {
    const { primary, secondary } = color || {
      primary: theme.background,
      secondary: theme.pokeball,
    };

    return `
        position: relative;
        width: 50px;
        height: 50px;
        z-index: 1;
        border-radius: 50%;
        overflow: hidden;
        transition: ${theme.transition};
        background-color: ${secondary};

        &::before,
        &::after {
            content: "";
            position: absolute;
            width: 100%;
            transition: ${theme.transition};
        }

        &::before {
            background-color: ${secondary};
            height: 50%;
        }

        &::after {
            top: calc(50% - 5px);
            left: 0;
            height: 10px;
            background-color: ${primary};
        }

        .inner {
          position: absolute;
          top: calc(50% - 15px);
          left: calc(50% - 15px);
          width: 30px;
          height: 30px;
          border-width: 5px;
          border-style: solid;
          background-color: ${secondary};
          border-color: ${primary};
          border-radius: 50%;
          z-index: 10;
          transition: ${theme.transition};
        }
    `;
  }}
`;

export { StyledPokeball };
