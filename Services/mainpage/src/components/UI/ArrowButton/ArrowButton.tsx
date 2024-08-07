import { FC, ReactNode } from "react";
import classes from './ArrowButton.module.css'

interface ArrowButtonProps {
    children: ReactNode,
    onClick: () => void;
}

const ArrowButton: FC<ArrowButtonProps> = ({children, onClick}) => {
    return (
        <button className={classes.container} onClick={onClick}>
            {children}
        </button>
    )
}

export default ArrowButton;