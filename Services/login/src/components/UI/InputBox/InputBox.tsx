import {useState} from 'react';
import classes from "./InputBox.module.css";
import {Input} from "@packages/shared";
import hideImg from "@/assets/hide.png";

const InputBox = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

    return (
        <div>
            <div className={classes.input__box}>
                <Input type={'text'} placeholder={'Ваше имя пользователя'}/>
            </div>
            <div className={classes.input__box}>
                <label onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                       htmlFor="login-password-input">
                    <img src={hideImg} alt=""/>
                </label>
                <Input id={'login-password-input'} type={isPasswordVisible ? 'text' : 'password'} placeholder={'Пароль'}/>
            </div>
        </div>
    );
};

export default InputBox;