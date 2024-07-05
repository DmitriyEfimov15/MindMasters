import {FC, ReactNode, useContext} from 'react';
import classes from './Footer.module.css'
import telegram from '../../assets/telegram.png'
import {ThemeContext} from "../../context/ThemeText";
import lightLogo from "../../assets/logo_right_light.png"
import darkLogo from "../../assets/logo_right_dark.png"

interface FooterProps {
    linksChildren: ReactNode;
    infoChildren: ReactNode;
}
const Footer: FC<FooterProps> = ({linksChildren, infoChildren}) => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'

    return (
        <footer className={lightTheme ? classes.footer : classes.dark__footer}>
            <div className={classes.content__box}>
                <div className={classes.container}>
                    <div className={classes.logo}>
                        <img src={lightTheme ? lightLogo : darkLogo} alt="logo"/>
                        <div className={classes.links}>
                            {linksChildren}
                        </div>
                    </div>
                    <div className={classes.social__media}>
                        <p>Мы в социальных сетях:</p>
                        <div className={classes.telegram}>
                            <a href="https://t.me/DimaChatChips"><img src={telegram} alt="TELEGRAM"/></a>
                        </div>
                    </div>
                </div>
                <div className={classes.information}>
                    <div className={classes.information__left}>
                        <p>©2024 «MindMasters». Все права защищены.</p>
                    </div>

                    <div className={classes.information__right}>
                        {infoChildren}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;