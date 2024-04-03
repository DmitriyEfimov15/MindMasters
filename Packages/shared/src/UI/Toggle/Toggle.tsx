import {FC, useContext, useState} from 'react';
import classes from './Toggle.module.css'
import Sun from '../../assets/sun.svg'
import Moon from '../../assets/moon.svg'
import {ThemeContext} from "../../context/ThemeText";

// interface ToggleProps {
//     fun?: () => void,
//     checked?: boolean
// }

const Toggle: FC = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'

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
        <label className={lightTheme ? classes.container : classes.dark__container} htmlFor={classes.toggle}>
            <input
                id={classes.toggle}
                type={'checkbox'}
                onClick={toggleFun}
                defaultChecked={inputChecked}
            />
            <span className={classes.sun}>
                <Sun/>
            </span>

            <span className={classes.moon}>
                <Moon/>
            </span>
        </label>
    );
};

export default Toggle;