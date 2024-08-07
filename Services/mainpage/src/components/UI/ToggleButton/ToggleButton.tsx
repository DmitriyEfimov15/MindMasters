import { FC, ReactNode, useContext } from "react";
import classes from './ToggleButton.module.css'
import { ThemeContext } from "@packages/shared";

interface ToggleButtonProps {
    children: ReactNode,
    onClick?: () => void,
    isActive: boolean
}

const ToggleButton: FC<ToggleButtonProps> = ({children, onClick, isActive}) => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'
    const lightRootClasses = [classes.button]
    const darkRootClasses = [classes.dark__button]

    if(isActive) {
        lightRootClasses.push(classes.active)
        darkRootClasses.push(classes.active__dark)
    }
    
    return (
        <button  className={lightTheme ? lightRootClasses.join(' ') : darkRootClasses.join(' ')} onClick={onClick}>
            {children}
        </button>
    )
}

export default ToggleButton;