import { createContext } from "react";

export const AppContext = createContext();

export const ThemeContext = createContext({
    theme: "dark"
});