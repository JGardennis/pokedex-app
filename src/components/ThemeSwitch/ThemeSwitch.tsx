import React, { useState } from "react";

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleOnClick = () => {
    document.documentElement.classList[darkMode ? "remove" : "add"](
      "theme-light"
    );
    document.documentElement.classList[darkMode ? "add" : "remove"](
      "theme-dark"
    );
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={handleOnClick}>{darkMode ? "Light" : "Dark"} Mode</button>
  );
};

export default ThemeSwitch;
