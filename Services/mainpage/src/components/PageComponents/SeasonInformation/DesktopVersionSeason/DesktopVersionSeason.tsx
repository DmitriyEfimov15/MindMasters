import {FC ,useContext} from 'react';
import classes from "./DesktopVersionSeason.module.css"
import {BlackButton, BlueButton, ThemeContext} from "@packages/shared";
import seasonFon from "@packages/shared/src/assets/fon_season_desktop.jpg";

const DesktopVersionSeason: FC = () => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'

    return (
        <div className={lightTheme ? classes.container : classes.container__dark}>
            <div className={classes.text__information}>
                <div className={classes.text}>
                    <h3>Летний курс перед ЕГЭ/ОГЭ-2025</h3>
                    <p className={classes.info}>Начни свою подготовку уже эти летом</p>

                    <p className={classes.ad}><a>При покупке Годового курса</a> подготовки к ЕГЭ-2025 ВРЕМЯ ПЕРВЫХ <br/> ты сможешь ботать на <span>Летнем курсе БЕСПЛАТНО</span></p>
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

export default DesktopVersionSeason;