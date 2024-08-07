import {FC, useContext} from 'react';
import {BlackButton, BlueButton, ThemeContext} from "@packages/shared";
import classes from "./MobileVersionSeason.module.css";
import seasonFon from "@packages/shared/src/assets/sesason-mobile-fon.png";

const MobileVersionSeason: FC = () => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'

    return (
        <div className={lightTheme ? classes.container : classes.container__dark}>
            <div className={classes.text__information}>
                <div className={classes.text}>
                    <h3>Летний курс перед ЕГЭ/ОГЭ-2025</h3>
                    <p className={classes.info}>Начни свою подготовку уже эти летом</p>

                    <p className={classes.ad}><a>При покупке Годового курса</a> подготовки к ЕГЭ-2025 ВРЕМЯ ПЕРВЫХ ты сможешь ботать на <span>Летнем курсе БЕСПЛАТНО</span></p>
                </div>

                <div className={classes.button__container}>
                    <BlueButton>Тариф ЕГЭ 11 класс</BlueButton>
                    <BlackButton>Тариф ОГЭ 9 класс</BlackButton>
                </div>
            </div>

            <picture className={classes.container__img}>
                <img className={classes.img} src={seasonFon} alt="season__fon.jpg"/>
            </picture>
        </div>
    );
};

export default MobileVersionSeason;