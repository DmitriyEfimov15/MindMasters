import classes from "./FooterLinks.module.css"
import {Link} from "react-router-dom";

export const FooterImportantLinks =
    <div className={classes.container__links}>
        <Link to={'/contact'}>Контакты</Link>
        <Link to={'/feedback'}>Отзывы</Link>
        <a href={'/https://t.me/DimaChatChips'}>Бот в ТГ</a>
    </div>

export const FooterInfoLinks =
    <div className={classes.container__info}>
        <Link to={'/privacy'}>Политика конфиденциальности</Link>
        <Link to={'/partners'}>Партнёрам</Link>
    </div>