import {FC, ReactNode, useContext, useEffect, useState} from 'react';
import classes from "./BannerAd.module.css"
import BannerYear from "@/components/PageComponents/Banners/BannerYear/BannerYear";
import BannerIntensive from "@/components/PageComponents/Banners/BannerIntensive/BannerIntensive";
import {ThemeContext} from "@packages/shared";
import {Banner} from "@/types/banner";
import DesktopBanner from "@/components/PageComponents/Banners/DesktopBanner/DesktopBanner";
import MobileBanner from "@/components/PageComponents/Banners/MobileBanner/MobileBanner";

const BannerAd: FC = () => {
    const bannerKeys: Banner = {
        year: <BannerYear/>,
        intensive: <BannerIntensive/>
    }

    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'

    const [currentElement, setCurrentElement] = useState<ReactNode>(bannerKeys.year)
    const [isButtonYearActive, setIsButtonYearActive] = useState<boolean>(true)
    const [isButtonIntensiveActive, setIsButtonIntensiveActive] = useState<boolean>(false)
    const [width, setWidth] = useState(window.innerWidth);

    const [userMedia, setUserMedia] = useState<boolean>(window.matchMedia("(max-width: 1024px)").matches)


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


    const yearButtonFunc = (element: ReactNode) => {
        setCurrentElement(bannerKeys.year)
        setIsButtonYearActive(true)
        setIsButtonIntensiveActive(false)
    }

    const intensiveButtonFunc = (element: ReactNode) => {
        setCurrentElement(bannerKeys.intensive)
        setIsButtonYearActive(false)
        setIsButtonIntensiveActive(true)
    }

    if(!userMedia) {
        return (
            <div className={lightTheme ? classes.banner_container : classes.dark__banner__container}>
                <div className={classes.carousel}>
                    {/*  Будущая карусель будет располагаться здесь  */}
                </div>
                <DesktopBanner currentElement={currentElement}
                               isButtonYearActive={isButtonYearActive}
                               isButtonIntensiveActive={isButtonIntensiveActive}
                               bannerKeys={bannerKeys}
                               yearButtonFunc={yearButtonFunc}
                               intensiveButtonFunc={intensiveButtonFunc}
                />
            </div>
        );
    }

    if(userMedia) {
        return (
            <div className={lightTheme ? classes.banner_container : classes.dark__banner__container}>
                <div className={classes.carousel}>
                    {/*  Будущая карусель будет располагаться здесь  */}
                </div>
                <MobileBanner/>
            </div>
        );
    }
};

export default BannerAd;