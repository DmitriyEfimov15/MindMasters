import {FC, ReactNode, useContext, useState, useEffect} from 'react';
import classes from "./Navbar.module.css"
import Phone from "../../assets/phonesvg.svg"
import logo_light from '../../assets/logo_right_light.png'
import logo_dark from '../../assets/logo_right_dark.png'
import Lines from '../../assets/lines.svg'
import Toggle from "../../UI/Toggle/Toggle";
import {ThemeContext} from "../../context/ThemeText";
import FullModal from "../../UI/FullModal/FullModal";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import {UserMediaWidth} from "../UserMediaWidth/UserMediaWidth";

interface NavbarProps {
    children?: ReactNode;
    authorisationChildren: ReactNode;
    fullModalChildren: ReactNode;
    footerChildren: ReactNode;
}
const Navbar: FC<NavbarProps> = ({children, authorisationChildren, fullModalChildren, footerChildren}) => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'
    const [isVisibleFullModal, setIsVisibleFullModal] = useState<boolean>(false)

    return (
        <UserMediaWidth desktop={<DesktopNavbar theme={lightTheme}
                                                linkChildren={children}
                                                authorisationChildren={authorisationChildren}
        />}
                        mobile={<MobileNavbar theme={lightTheme}
                                              footerChildren={footerChildren}
                                              isVisible={isVisibleFullModal}
                                              setIsVisible={setIsVisibleFullModal}
                                              fullModalChildren={fullModalChildren}/>}
        />
    )
};

export default Navbar;