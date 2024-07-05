import {FC, ReactNode, useContext} from 'react';
import classes from './AppLayout.module.css'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {ThemeContext} from "../../context/ThemeText";

interface AppLayoutProps {
    children: ReactNode,
    navbarChildren?: ReactNode,
    footerLinksChildren?: ReactNode;
    footerInfoChildren: ReactNode;
    authorisationChildren?: ReactNode
    fullModalChildren: ReactNode;
    footerChildrenModal: ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({children, navbarChildren, footerLinksChildren, authorisationChildren, fullModalChildren, footerChildrenModal, footerInfoChildren}) => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'

    return (
        <div className={lightTheme ? classes.container : classes.dark__container}>
            <Navbar footerChildren={footerChildrenModal} fullModalChildren={fullModalChildren} authorisationChildren={authorisationChildren} children={navbarChildren}/>
            <main className={classes.children__content}>
                {children}
            </main>
            <Footer infoChildren={footerInfoChildren} linksChildren={footerLinksChildren}/>
        </div>
    );
};
