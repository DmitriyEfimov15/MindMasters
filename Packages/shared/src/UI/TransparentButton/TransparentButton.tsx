import {ReactNode, FC, MouseEventHandler, useContext} from 'react';
import classes from './TransparentButton.module.css'
import {ThemeContext} from "../../context/ThemeText";

interface TransparentButtonProps {
    children: ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export const TransparentButton: FC<TransparentButtonProps>= ({children, onClick}) => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'

    return (
        <button onClick={onClick} className={lightTheme ? classes.button : classes.dark__button}>
            {children}
        </button>
    );
};
