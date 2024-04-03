import {FC, ReactNode, useContext} from 'react';
import classes from './FullModal.module.css'
import Toggle from "../Toggle/Toggle";
import Close from "../../assets/close.svg"
import {ThemeContext} from "../../context/ThemeText";

interface FullModalProps {
    isVisible: boolean,
    children: ReactNode,
    closeFun:  () => void;
    footerChildren: ReactNode;
}

const FullModal: FC<FullModalProps> = ({isVisible, children, closeFun, footerChildren}) => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'
    const rootClasses = [classes.container]

    if(isVisible) {
        rootClasses.push(classes.active)
    }
    return (
        <div className={rootClasses.join(' ')}>
            <div className={lightTheme ? classes.content__box : classes.dark__content__box}>
                <header className={classes.header}>
                    <div className={classes.toggle}>
                        <Toggle></Toggle>
                    </div>
                    <div onClick={closeFun} className={classes.close}>
                        <Close/>
                    </div>
                </header>
                <main className={classes.main}>
                    {children}
                </main>
                <footer className={classes.footer}>
                    {footerChildren}
                </footer>
            </div>
        </div>
    );
};

export default FullModal;