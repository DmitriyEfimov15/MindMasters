import {FC, useContext} from 'react';
import classes from "./BannerIntensive.module.css";
import {BlackButton, BlueButton, ThemeContext} from "@packages/shared";
import BannerIntPng from "../../../../../../../Packages/shared/src/assets/banner_int.png";

const BannerIntensive: FC = () => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'

    return (
        <div className={lightTheme ? classes.banner__intensive__container : classes.dark__banner__intensive__container}>
            <div className={classes.text__information}>
                <div>
                    <h3>Интенсивы</h3>
                    <div className={classes.paragraph__container}>
                        <p>Старт продаж интенсивов</p>
                        <p>ЕГЭ, ОГЭ на 24/25 учебный год</p>
                    </div>
                    <div className={classes.context__container}>
                        <p>Получай знания здесь и сейчас!</p>
                        <p><span className={classes.red__text}>Быстро, качественно, надёжно.</span></p>
                    </div>
                </div>

                <div className={classes.banner__buttons}>
                    <BlueButton>Тарифы ЕГЭ 11 класс</BlueButton>
                    <BlackButton>Тарифы ОГЭ 9 класс</BlackButton>
                </div>
            </div>
            <picture className={classes.banner__img}>
                <img src={BannerIntPng} alt="Баннер интесивов"/>
            </picture>
        </div>
    );
};

export default BannerIntensive;