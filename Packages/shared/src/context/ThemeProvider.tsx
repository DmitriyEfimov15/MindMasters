import {FC, ReactNode, useEffect, useState} from 'react';
import {ThemeContext, themes} from "./ThemeText";

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {

    const getTheme = () => {
        const theme = `${window?.localStorage?.getItem('theme')}`
        if (Object.values(themes).includes(theme)) return theme

        const userMedia = window.matchMedia('(prefers-color-scheme: light)')
        if (userMedia.matches) return themes.light

        return themes.dark
    }

    const [ theme, setTheme ] = useState(getTheme)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
    }, [ theme ])

    return (
        <ThemeContext.Provider value={{theme, setTheme}} >
            {children}
        </ThemeContext.Provider>
    );
};