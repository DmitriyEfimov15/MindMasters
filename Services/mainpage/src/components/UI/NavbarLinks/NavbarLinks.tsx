import classes from './NavbarLinks.module.css'
import {Link} from "react-router-dom";
import Enter from "../../../../../../Packages/shared/src/assets/entersvg.svg"
import Phone from "@packages/shared/src/assets/phonesvg.svg";
import Telegram from "@packages/shared/src/assets/telegramsvg.svg";

export const NavbarLinks =
    <div className={classes.container}>
        <Link to={'/subjects'}>Предметы</Link>
        <Link to={'/tries'}>Пробники</Link>
        <Link to={'/feedback'}>Отзывы</Link>
        <Link to={'/help'}>Помощь</Link>
    </div>


export const NavbarAuthorisation =
    <div className={classes.authorisation__img}>
        <Link to={'/login'}>
            <Enter/>
        </Link>
    </div>

export const NavbarFullModalLinks =
    <div className={classes.fullmodal}>
        <div className={classes.link__container}>
            <Link className={classes.link__authorisation} to={'/login'}>
                <p>Присоединяйтесь к нам</p>
                <Enter/>
            </Link>

            <Link className={classes.link} to={'/subject'}>
                <div>Предметы</div>
            </Link>

            <Link className={classes.link} to={'/tries'}>
                <div>Пробник</div>
            </Link>

            <Link className={classes.link} to={'/feedback'}>
                <div>Отзывы</div>
            </Link>

            <Link className={classes.link} to={'/help'}>
                <div>Помощь</div>
            </Link>
        </div>
    </div>

export const FooterLinks =
    <div className={classes.footer}>
        <Link to={'/contact'} className={classes.phone}>
            <Phone/>
        </Link>
        <a href={'https://t.me/DimaChatChips'} className={classes.telegram}>
            <Telegram/>
        </a>
    </div>