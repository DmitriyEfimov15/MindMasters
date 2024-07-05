import {ReactNode, FC, MouseEventHandler} from 'react';
import classes from './BlackButton.module.css'

interface BlackButtonProps {
    children: ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export const BlackButton: FC<BlackButtonProps>= ({children, onClick}) => {
    return (
        <button onClick={onClick} className={classes.button}>
            {children}
        </button>
    );
};
