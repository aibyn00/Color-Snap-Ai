import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("kaz");
  const [user, setUser] = useState(null);
  const [isAc, setIsAc] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAc(true); 
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, language, setLanguage, user, setUser, isAc, setIsAc }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
