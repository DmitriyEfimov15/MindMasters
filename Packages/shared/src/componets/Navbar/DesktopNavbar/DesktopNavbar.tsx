import {FC, ReactNode} from 'react';
import logo_light from "../../../assets/logo_right_light.png";
import logo_dark from "../../../assets/logo_right_dark.png";
import Phone from "../../../assets/phonesvg.svg";
import Toggle from "../../../UI/Toggle/Toggle";
import classes from './DesktopNavbar.module.css'

interface DesktopNavbarProps {
    theme: boolean,
    linkChildren: ReactNode;
    authorisationChildren: ReactNode;
}

const DesktopNavbar:FC<DesktopNavbarProps> = ({theme, linkChildren, authorisationChildren}) => {
    return (
        <header className={theme ? classes.header : classes.dark__header}>
            <div className={theme ? classes.header__container : classes.dark__header__container}>
                <div className={classes.header__left}>
                    <div className={classes.header_logo}>
                        <img src={theme ? logo_light : logo_dark} alt="ЗДЕСЬ ЛОГО"/>
                    </div>
                    <div className={classes.links}>
                        {linkChildren}
                    </div>
                </div>
                <div className={classes.header__right}>
                    <div className={classes.settings}>
                        <div className={classes.number}>
                            <div className={classes.number__img}>
                                <Phone/>
                            </div>
                        </div>

                        <div className={classes.mode__toggle}>
                            <Toggle/>
                        </div>

                        <div className={classes.authorisation}>
                            <div className={classes.authorisation__img}>
                                {authorisationChildren}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DesktopNavbar;