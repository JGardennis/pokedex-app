import { useContext } from "react";
import { ThemeContext } from "styled-components";

function useTheme() {
  const theme = useContext(ThemeContext);
  return theme || {};
}

export default useTheme;
