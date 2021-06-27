import React from "react";

export const Themecontext = React.createContext();

Themecontext.displayName = "THEME-CONTEXT";

const themeValuese = {
  light: {
    bodyBackground: "#FFFFFF"
  },
  dark: {
    bodyBackground: "#12191D",
    color: "#80939C"
  }
};
function ThemeContextProvider({ children }) {
  const [currentTheme, settheme] = React.useState("light");



  const toogleTheme = () => {
    settheme(currentTheme === "light" ? "dark" : "light");
  };


  

  const value = {
    currentTheme,
    toogleTheme,
    theme: themeValuese[currentTheme],
    settheme
  };
  return (
    <Themecontext.Provider value={value}>{children}</Themecontext.Provider>
  );
}

export { ThemeContextProvider };
