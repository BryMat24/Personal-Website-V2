"use client";
import {
    createContext,
    FunctionComponent,
    useEffect,
    useRef,
    useState,
} from "react";

// type of the context
type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

// context
export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: function (): void {
        throw new Error("Function not implemented.");
    },
});

// the provider
export const ThemeProvider: FunctionComponent<{ children: JSX.Element }> = ({
    children,
}) => {
    const [theme, setTheme] = useState<Theme>("light");
    const isInitialRender = useRef(true);

    useEffect(() => {
        if (isInitialRender.current) {
            const savedTheme =
                (localStorage.getItem("theme") as Theme) || "light";
            setTheme(savedTheme);
            isInitialRender.current = false;
        } else {
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    const toggleTheme = () => {
        const newTheme: Theme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
