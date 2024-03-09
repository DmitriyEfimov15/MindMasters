import {FC, ReactNode} from 'react';
import classes from "./Navbar.module.css"
import phone from "../../assets/phone-call.png"
import enter from "../../assets/arrows.png"

interface NavbarProps {
    children?: ReactNode;
}
const Navbar: FC<NavbarProps> = ({children}) => {
    return (
        <header className={classes.header}>
            <div className={classes.header__left}>
                <div className={classes.header_logo}>
                    <img src="" alt="ЗДЕСЬ ЛОГО"/>
                </div>
                <div className={classes.links}>
                    {children}
                </div>
            </div>
            <div className={classes.header__right}>
                <div className={classes.settings}>
                    <div className={classes.number}>
                        <div className={classes.number__img}>
                            <img src={phone} alt="phone.png"/>
                        </div>
                    </div>

                    <div className={classes.mode__toggle}>
                        TOGGLE
                    </div>

                    <div className={classes.authorisation}>
                        <div className={classes.authorisation__img}>
                            <img src={enter} alt="enter.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;