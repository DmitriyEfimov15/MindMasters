import {FC, ReactNode, useContext, useEffect, useState} from 'react';
import classes from "./BannerAd.module.css"
import {ThemeContext, UserMediaWidth} from "@packages/shared";
import {bannerKeys} from "@/utils/bannerKeys";
import DesktopBanner from "@/components/PageComponents/Banners/DesktopBanner/DesktopBanner";
import MobileBanner from "@/components/PageComponents/Banners/MobileBanner/MobileBanner";

const BannerAd: FC = () => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'

    const [currentElement, setCurrentElement] = useState<ReactNode>(bannerKeys.year)
    const [isButtonYearActive, setIsButtonYearActive] = useState<boolean>(true)
    const [isButtonIntensiveActive, setIsButtonIntensiveActive] = useState<boolean>(false)

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

    return (
        <div className={lightTheme ? classes.banner_container : classes.dark__banner__container}>
            <div className={classes.carousel}>
                {/*  Будущая карусель будет располагаться здесь  */}
            </div>

            <UserMediaWidth desktop={<DesktopBanner currentElement={currentElement}
                                                    isButtonYearActive={isButtonYearActive}
                                                    isButtonIntensiveActive={isButtonIntensiveActive}
                                                    yearButtonFunc={yearButtonFunc}
                                                    intensiveButtonFunc={intensiveButtonFunc}
            />}
                            mobile={<MobileBanner/>}
            />
        </div>
    )
};

export default BannerAd;