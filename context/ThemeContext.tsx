import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { ThemeType } from "../types";

type ThemeContextType = {
    theme: ThemeType;
    toggleTheme: () => void;
    isDark: boolean;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => { },
    isDark: false,
});

const THEME_KEY = "user-theme";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const systemColorScheme = useColorScheme();
    const [theme, setTheme] = useState<ThemeType>("light");

    useEffect(() => {
        const loadTheme = async () => {
            const savedTheme = await AsyncStorage.getItem(THEME_KEY);
            if (savedTheme === "light" || savedTheme === "dark") {
                setTheme(savedTheme);
            } else if (systemColorScheme) {
                setTheme(systemColorScheme as ThemeType);
            }
        };
        loadTheme();
    }, [systemColorScheme]);

    const toggleTheme = async () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        await AsyncStorage.setItem(THEME_KEY, newTheme);
    };

    const isDark = theme === "dark";

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
