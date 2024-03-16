import {FC, ReactNode, useContext, useState} from 'react';
import classes from "./Navbar.module.css"
import Phone from "../../assets/phonesvg.svg"
import Enter from '../../assets/entersvg.svg'
import logo_light from '../../assets/logo_right_light.png'
import logo_dark from '../../assets/logo_right_dark.png'
import Toggle from "../../UI/Toggle/Toggle";
import {ThemeContext} from "../../context/ThemeText";

interface NavbarProps {
    children?: ReactNode;
}
const Navbar: FC<NavbarProps> = ({children}) => {
    const {theme, setTheme} = useContext(ThemeContext)

    const [inputChecked, setInputChecked] = useState(theme == 'light' ? false : true)
    const toggleFun = () => {
        if(localStorage.getItem('theme') === 'light') {
            localStorage.setItem('theme', 'dark')
            return setTheme('dark')
        }

        if(localStorage.getItem('theme') === 'dark') {
            localStorage.setItem('theme', 'light')
            return setTheme('light')
        }
    }

    return (
        <header className={classes.header}>
            <div className={classes.header__left}>
                <div className={classes.header_logo}>
                    <img src={theme === 'light' ? logo_light : logo_dark} alt="ЗДЕСЬ ЛОГО"/>
                </div>
                <div className={classes.links}>
                    {children}
                </div>
            </div>
            <div className={classes.header__right}>
                <div className={classes.settings}>
                    <div className={classes.number}>
                        <div className={classes.number__img}>
                            <Phone />
                        </div>
                    </div>

                    <div className={classes.mode__toggle}>
                        <Toggle checked={inputChecked} fun={toggleFun}/>
                    </div>

                    <div className={classes.authorisation}>
                        <div className={classes.authorisation__img}>
                            <Enter />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;