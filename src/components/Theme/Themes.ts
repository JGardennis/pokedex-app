const globalTheme = {
  transition: "0.4s all ease",
  primaryFont: "Jost, sans-serif",
  secondaryFont: "rubik, sans-serif",
};

export const lightTheme = {
  ...globalTheme,
  background: "#fafafa",
  pokeball: "#e6e6e6",
  text: "#707070",
  boxShadow: "1px 1px 3px 0 #adadad;",
};

export const darkTheme = {
  ...globalTheme,
  background: "#252525",
  pokeball: "#393e46",
  text: "#fff",
  cardBackground: "#393e46",
  boxShadow: "1px 1px 3px 0 #1d1a1a;",
};

export const colors = {
  red: {
    primary: "#ff5252",
    secondary: "#ff9f9f",
  },
  green: {
    primary: "#1bbc9b",
    secondary: "#37ccae",
  },
  blue: {
    primary: "#00abd8",
    secondary: "#33c4eb",
  },
  purple: {
    primary: "#9c27b0",
    secondary: "#a95fb5",
  },
};

export const pokemonTypes = {
  grass: {
    primary: "#67cc8e",
    secondary: "#91d9ad",
  },
  bug: {
    primary: "#a8c545",
    secondary: "#c3d680",
  },
  fire: {
    primary: "#ff9f9f",
    secondary: "#eea7a7",
  },
  water: {
    primary: "#7ecefd",
    secondary: "#b5d9ee",
  },
  electric: {
    primary: "#ffdc00",
    secondary: "#ffec77",
  },
  poison: {
    primary: "#9c27b0",
    secondary: "#af6cbb",
  },
  psychic: {
    primary: "#e391c0",
    secondary: "#e2bad1",
  },
  dark: {
    primary: "#374140",
    secondary: "#808080",
  },
  fighting: {
    primary: "#d57e7e",
    secondary: "#d2a6a6",
  },
  flying: {
    primary: "#59d8e6",
    secondary: "#c8eaee",
  },
  ground: {
    primary: "#f0c755",
    secondary: "#f1dda8",
  },
  ghost: {
    primary: "#c09dec",
    secondary: "#d7c5ee",
  },
  fairy: {
    primary: "#f6bae7",
    secondary: "#f6d5ee",
  },
  steel: {
    primary: "#dcdcdc",
    secondary: "#f6f6f6",
  },
  ice: {
    primary: "#acf0f2",
    secondary: "#d8fbfc",
  },
  rock: {
    primary: "#e6a14d",
    secondary: "#e2be92",
  },
  dragon: {
    primary: "#8a76ff",
    secondary: "#ad9ffc",
  },
  normal: {
    primary: "#f7deb2",
    secondary: "#ffeccb",
  },
};

export const queries = {
  mobile: "@media only screen and (max-width: 500px)",
  tablet: "@media only screen and (max-width: 768px)",
  laptop: "@media only screen and (max-width: 1024px)",
  desktop: "@media only screen and (min-width: 1024px)",
};