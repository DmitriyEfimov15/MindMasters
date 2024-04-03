import {FC, ReactNode} from 'react';
import classes from "../Navbar.module.css";
import logo_light from "../../../assets/logo_right_light.png";
import logo_dark from "../../../assets/logo_right_dark.png";
import Phone from "../../../assets/phonesvg.svg";
import Lines from "../../../assets/lines.svg";
import FullModal from "../../../UI/FullModal/FullModal";

interface MobileNavbarProps {
    theme: boolean,
    footerChildren: ReactNode;
    isVisible: boolean,
    setIsVisible:  React.Dispatch<React.SetStateAction<boolean>>;
    fullModalChildren: ReactNode,
}

const MobileNavbar:FC<MobileNavbarProps> = ({theme, isVisible, setIsVisible, footerChildren, fullModalChildren}) => {
    return (
        <header className={theme ? classes.header : classes.dark__header}>
            <div className={theme ? classes.header__container : classes.dark__header__container}>
                <div className={classes.header__left}>
                    <div className={classes.header_logo}>
                        <img src={theme ? logo_light : logo_dark} alt="ЗДЕСЬ ЛОГО"/>
                    </div>
                </div>
                <div className={classes.header__right}>
                    <div className={classes.settings}>
                        <div className={classes.number}>
                            <div className={classes.number__img}>
                                <Phone/>
                            </div>
                        </div>

                        <div className={classes.open__button}>
                            <div className={classes.open__button__container}>
                                <Lines onClick={() => setIsVisible(true)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FullModal footerChildren={footerChildren} isVisible={isVisible}
                       closeFun={() => setIsVisible(false)}>
                {fullModalChildren}
            </FullModal>
        </header>
    );
};

export default MobileNavbar;