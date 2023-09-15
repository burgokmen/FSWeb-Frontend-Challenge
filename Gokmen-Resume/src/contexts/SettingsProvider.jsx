import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const darkModeHandler = () => {
    document.body.classList.toggle("dark", !darkMode);
    setDarkMode(!darkMode);
  };

  const getInitialDarkModeState = () => {
    if (JSON.parse(localStorage.getItem("darkmode")) === true) {
      return true;
    } else if (JSON.parse(localStorage.getItem("darkmode")) === false) {
      return false;
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return true;
    } else {
      return false;
    }
  };

  const [language, setLanguage] = useState(
    localStorage.getItem("language")
      ? localStorage.getItem("language")
      : navigator.languages.includes("tr")
      ? "tr"
      : "en"
  );
  const [darkMode, setDarkMode] = useState(getInitialDarkModeState());

  useEffect(() => {
    const isDarkModeEnabled = darkMode;
    if (isDarkModeEnabled) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <SettingsContext.Provider
      value={{
        language,
        setLanguage,
        darkModeHandler,
        darkMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
