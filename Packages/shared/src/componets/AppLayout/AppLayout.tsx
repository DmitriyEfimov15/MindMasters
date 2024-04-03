import {FC, ReactNode} from 'react';
import classes from './AppLayout.module.css'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface AppLayoutProps {
    children: ReactNode,
    navbarChildren?: ReactNode,
    footerChildren?: ReactNode,
    authorisationChildren?: ReactNode
    fullModalChildren: ReactNode;
    footerChildrenModal: ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({children, navbarChildren, footerChildren, authorisationChildren, fullModalChildren, footerChildrenModal}) => {
    return (
        <div className={classes.container}>
            <Navbar footerChildren={footerChildrenModal} fullModalChildren={fullModalChildren} authorisationChildren={authorisationChildren} children={navbarChildren}/>
            <main className={classes.children__content}>
                {children}
            </main>
            <Footer children={footerChildren}/>
        </div>
    );
};
