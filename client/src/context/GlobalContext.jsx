import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const StatesContext = createContext();

export const GlobalContext = ({ children }) => {
  const [lang, setLang] = useState("uz");
  useEffect(() => {
    let ws_l = window.location.search;
    const lang = ws_l.split("=")[1];
    if (lang != null) {
      setLang(lang);
    }
  }, []);
  return (
    <StatesContext.Provider value={{ lang, setLang }}>
      {children}
    </StatesContext.Provider>
  );
};
