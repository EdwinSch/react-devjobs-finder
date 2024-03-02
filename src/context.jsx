import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // ---- Global States
  const [theme, setTheme] = useState("light-theme");

  // ---- Global Functions
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      return;
    }
    setTheme("light-theme");
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
