import {FC, ReactNode} from 'react';
import classes from './AppLayout.module.css'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface AppLayoutProps {
    children: ReactNode,
    navbarChildren?: ReactNode,
    footerChildren?: ReactNode,
}

export const AppLayout: FC<AppLayoutProps> = ({children, navbarChildren, footerChildren}) => {
    return (
        <div className={classes.container}>
            <Navbar children={navbarChildren}/>
            <main className={classes.children__content}>
                {children}
            </main>
            <Footer children={footerChildren}/>
        </div>
    );
};
