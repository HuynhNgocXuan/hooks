import { useState, createContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')
    const handleToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    const objectTheme = {
        theme,
        handleToggle
    }
    return (
        <ThemeContext.Provider value={objectTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }