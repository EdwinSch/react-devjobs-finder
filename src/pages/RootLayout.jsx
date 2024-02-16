import Header from "../components/Header/Header";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const [theme, setTheme] = useState("light-theme");

  // Load initial color theme
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // Switch theme function
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      return;
    }
    setTheme("light-theme");
  };

  return (
    <main>
      <Header toggleTheme={toggleTheme} />
    </main>
  );
};

export default RootLayout;
