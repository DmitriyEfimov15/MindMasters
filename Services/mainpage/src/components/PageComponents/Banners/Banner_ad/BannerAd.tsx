import {FC} from 'react';
import classes from "./Banner_ad.module.css"
import BannerYear from "../../../../../../../Packages/shared/src/assets/banner_ad.png"
// import BannerYear from "@/packages/shared/src/assets/banner_ad.png"

const BannerAd: FC = () => {
    return (
        <div className={classes.banner_container}>
            <div className={classes.carusel}>
            {/*  Будущая карусель будет располагаться здесь  */}
            </div>

            <div className={classes.banner__content__year}>
                <div className={classes.text__information}>
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
                <picture>
                    <img src={BannerYear} alt="Баннер годового курса"/>
                </picture>
            </div>
        </div>
    );
};

export default BannerAd;