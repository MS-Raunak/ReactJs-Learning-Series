import { createContext, useContext } from "react";

export const ThemeContext = createContext({ //can pass the default value
    themeMode: "light",
    darkTheme: () =>{},
    lightTheme: () =>{}
});

export const ThemeProvider = ThemeContext.Provider; //we can also wrap the Provider in a single file where context is created

export default function useTheme(){
    return useContext(ThemeContext);
}