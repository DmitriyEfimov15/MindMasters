import React from 'react';
import classes from "./LoginForm.module.css";
import {BlueButton} from "@packages/shared";
import InputBox from "@/components/UI/InputBox/InputBox";

const LoginForm = () => {
    const buttonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        console.log('click')
    }
    return (
        <form className={classes.form}>
            <InputBox />
            {/* Вопросики по поводу прикрепления link к правому краю!!!!*/}
            <div className={classes.link__box}>
                <a className={classes.link} href="">Восстановить пароль</a> {/*  Добавить форму востановления пароля!!!!!!!!  */}
            </div>
            <BlueButton onClick={buttonClick}>Войти</BlueButton>
        </form>
    );
};

export default LoginForm;