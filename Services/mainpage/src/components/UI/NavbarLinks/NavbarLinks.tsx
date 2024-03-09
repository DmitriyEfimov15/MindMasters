import classes from './NavbarLinks.module.css'
import {Link} from "react-router-dom";

export const NavbarLinks =
    <div className={classes.container}>
        <Link to={'/subjects'}>Предметы</Link>
        <Link to={'/tries'}>Пробники</Link>
        <Link to={'/feedback'}>Отзывы</Link>
        <Link to={'/help'}>Помощь</Link>
    </div>
