import {FC, ReactNode} from 'react';
import classes from './Footer.module.css'
import telegram from '../../assets/telegram.png'

interface FooterProps {
    children?: ReactNode
}
const Footer: FC<FooterProps> = ({children}) => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <img src="" alt="ЛОГО"/>
                </div>
                <div className={classes.links}>
                    {children}
                </div>
                <div className={classes.social__media}>
                    <p>Мы в социальных сетях:</p>
                    <div className={classes.telegram}>
                        <img src={telegram} alt="TELEGRAM"/>
                    </div>
                </div>
            </div>
            <div className={classes.information}>
                <div className={classes.information__left}>
                    <p>©2024 «MindMasters». Все права защищены.</p>
                </div>

                <div className={classes.information__right}>
                    <p>Политика конфиденциальности</p>
                    <p>Партнерам</p>
                    <p>Техническая поддержка</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;