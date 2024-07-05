import {FC, useContext} from 'react';
import classes from "./BannerYear.module.css";
import {BlackButton, BlueButton, ThemeContext, TransparentButton} from "@packages/shared";
import BannerYearPng from "../../../../../../../Packages/shared/src/assets/banner_ad.png"


const BannerYear: FC = () => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'

    return (
        <div className={lightTheme ? classes.banner__content__year : classes.dark__banner__content__year}>
            <div className={classes.text__information}>
                <div>
                    <h3>Годовой курс</h3>
                    <div className={classes.paragraph__container}>
                        <p>Старт продаж годовых курсов</p>
                        <p>ЕГЭ, ОГЭ и 10КЛ 24/25 учебный год</p>
                    </div>
                    <div className={classes.context__container}>
                        <p>Не жди начала учебного года!</p>
                        <p>Позаботься о своей готовности к экзаменам уже сейчас!</p>
                    </div>
                </div>

                <div className={classes.banner__buttons}>
                    <BlueButton>Тарифы ЕГЭ 11 класс</BlueButton>
                    <BlackButton>Тарифы ОГЭ 9 класс</BlackButton>
                    <TransparentButton>Тарифы ЕГЭ 10 класс</TransparentButton>
                </div>
            </div>
            <picture className={classes.banner__img}>
                <img src={BannerYearPng} alt="Баннер годового курса"/>
            </picture>
        </div>
    );
};

export default BannerYear;