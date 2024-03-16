import {FC} from 'react';
import classes from './Toggle.module.css'
import Sun from '../../assets/sun.svg'
import Moon from '../../assets/moon.svg'

interface ToggleProps {
    fun?: () => void,
    checked?: boolean
}

const Toggle: FC<ToggleProps> = ({fun, checked}) => {
    return (
        <label className={classes.container} htmlFor={classes.toggle}>
            <input
                id={classes.toggle}
                type={'checkbox'}
                onClick={fun}
                defaultChecked={checked}
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