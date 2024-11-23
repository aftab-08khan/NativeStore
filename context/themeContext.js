import React, { createContext, useContext, useState } from "react";
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  const handleModeBtn = (type) => {
    setMode((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ mode, setMode, handleModeBtn }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
