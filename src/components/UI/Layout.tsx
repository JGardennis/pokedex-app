import styled, { css } from "styled-components";
import { queries } from "../Theme";

const marginTop = ({
  fromTop,
}: {
  fromTop: string | { [key: string]: string };
}) => {
  switch (typeof fromTop) {
    case "string":
      return css`
        margin-top: ${fromTop};
      `;
    case "object":
      return css`
        ${Object.keys(fromTop).map(
          (key) => `
          ${queries[key]} {
            margin-top: ${fromTop[key]};
          }
        `
        )}
      `;
  }
};

const Layout = styled.div`
  display: block;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  ${(props) => (props.fromTop ? marginTop : ``)};
`;

export default Layout;
