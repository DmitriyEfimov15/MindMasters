import {ReactNode, FC, MouseEventHandler} from 'react';
import classes from './BlueButton.module.css'

interface RedButtonProps {
    children: ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export const BlueButton: FC<RedButtonProps>= ({children, onClick}) => {
    return (
        <button onClick={onClick} className={classes.button}>
            {children}
        </button>
    );
};
