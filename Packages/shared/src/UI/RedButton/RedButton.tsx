import {ReactNode, FC, MouseEventHandler} from 'react';
import classes from './RedButton.module.css'

interface RedButtonProps {
    children: ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export const RedButton: FC<RedButtonProps>= ({children, onClick}) => {
    return (
        <button onClick={onClick} className={classes.button}>
            {children}
        </button>
    );
};
