import {FC, useContext} from 'react';
import classes from "./MobileBannerYear.module.css";
import {BlackButton, BlueButton, ThemeContext, TransparentButton} from "@packages/shared";
import MobileBannerImg from '@packages/shared/src/assets/mobileYearImg.jpg'

const MobileBannerYear: FC = () => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'

    return (
        <div className={lightTheme ? classes.banner__year : classes.dark__banner__year}>
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

            <picture className={classes.img__container}>
                <img src={MobileBannerImg} alt="BannerYear"/>
            </picture>
        </div>
    );
};

export default MobileBannerYear;