import {FC} from 'react';
import classes from './Input.module.css'

interface InputProps {
    type: string,
    placeholder?: string,
    id?: string
}
export const Input: FC<InputProps> = ({type, placeholder,id}) => {
    return (
        <input id={id} className={classes.input} type={type} placeholder={placeholder}/>
    );
};
