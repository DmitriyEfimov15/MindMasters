import {createContext} from 'react'
export interface Themes {
    theme: string,
    setTheme:  React.Dispatch<React.SetStateAction<string>>

}

const initialState: Themes = {
    theme: 'light',
    setTheme: () => 'light'
}

export const ThemeContext = createContext(initialState)