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

interface NavbarProps {
    children?: ReactNode;
    authorisationChildren: ReactNode;
    fullModalChildren: ReactNode;
    footerChildren: ReactNode;
}
const Navbar: FC<NavbarProps> = ({children, authorisationChildren, fullModalChildren, footerChildren}) => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'
    const [userMedia, setUserMedia] = useState<boolean>(window.matchMedia("(max-width: 1024px)").matches)
    const [width, setWidth] = useState(window.innerWidth);
    const [isVisibleFullModal, setIsVisibleFullModal] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = (event: any) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        setUserMedia(window.matchMedia("(max-width: 1024px)").matches)
    }, [window.innerWidth]);

    if (userMedia == false) {
        return (
            <DesktopNavbar theme={lightTheme} linkChildren={children} authorisationChildren={authorisationChildren}/>
        );
    }

    if (userMedia== true) {
        return (
            <MobileNavbar theme={lightTheme} footerChildren={footerChildren} isVisible={isVisibleFullModal} setIsVisible={setIsVisibleFullModal} fullModalChildren={fullModalChildren}/>
        );
    }
};

export default Navbar;