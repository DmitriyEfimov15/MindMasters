import {FC, MouseEventHandler, ReactNode, useContext} from 'react';
import classes from './BannerButton.module.css'
import {ThemeContext} from "@packages/shared";

interface BannerButtonProps {
    children: ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement>,
    isButtonActive: boolean
}

const BannerButton: FC<BannerButtonProps> = ({children, onClick, isButtonActive}) => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'

    const rootClasses: string[] = []

    if(lightTheme) {
        rootClasses.push(classes.button)
    }

    if(!lightTheme) {
        rootClasses.push(classes.button__dark)
    }

    if(isButtonActive === true) {
        rootClasses.push(classes.active)
    }

    return (
        <button onClick={onClick} className={rootClasses.join(' ')}>
            {children}
        </button>
    );
};

export default BannerButton;