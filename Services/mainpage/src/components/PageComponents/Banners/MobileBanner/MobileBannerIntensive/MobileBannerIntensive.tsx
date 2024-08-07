import {FC, useContext} from 'react';
import classes from "./MobileBannerIntensive.module.css";
import {BlackButton, BlueButton, ThemeContext} from "@packages/shared";
import MobileBannerIntensiveImg from '@packages/shared/src/assets/mobileIntBannerImg.jpg'


const MobileBannerIntensive:FC = () => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'

    return (
        <div className={lightTheme ? classes.banner__year : classes.dark__banner__year}>
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

            <picture className={classes.img__container}>
                <img src={MobileBannerIntensiveImg} alt="BannerIntensive"/>
            </picture>
        </div>
    );
};

export default MobileBannerIntensive;