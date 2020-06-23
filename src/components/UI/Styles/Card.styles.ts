import styled from "styled-components";

const StyledCard = styled.div`
  ${({ theme, color, transition }) => `
        display: block;
        position: relative;
        width: 230px;
        height: 200px;
        margin: 1em;
        box-shadow: ${theme.boxShadow};
        font-family: ${theme.secondaryFont};
        padding: 1em;
        border-radius: 5px;
        background-color: ${theme.cardBackground || color};
        transition: ${transition};

        h2 {
            margin-top: 2em;
            font-size: 1.2em;
            font-weight: 500;
          }
        
        a {
            text-decoration: none;
            color: #fff;
        }

        .card__image {
            position: absolute;
            top: 20px;
            right: 0px;
            z-index: 10;
            width: 8em;
        }
    `}
`;

export { StyledCard };
