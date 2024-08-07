import {FC, ReactNode, useContext, useState} from 'react';
import classes from './MobileBanner.module.css'
import {BlackButton, BlueButton, ThemeContext, TransparentButton} from "@packages/shared";
import MobileBannerYear from "@/components/PageComponents/Banners/MobileBanner/MobileBannerYear/MobileBannerYear";
import {Banner} from "@/types/banner";
import BannerYear from "@/components/PageComponents/Banners/BannerYear/BannerYear";
import BannerIntensive from "@/components/PageComponents/Banners/BannerIntensive/BannerIntensive";
import {mobileBannerKeys} from "@/utils/bannerKeys";
import MobileBannerButton from "@/components/UI/MobileBannerButton/MobileBannerButton";

const MobileBanner: FC = () => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'
    const [currentElement, setCurrentElement] = useState<ReactNode>(mobileBannerKeys.year)
    const [isYearButtonActive, setIsYearButtonActive] = useState<boolean>(true)
    const [isIntensiveButtonActive, setIsIntensiveButtonActive] = useState<boolean>(false)

    const yearButtonFunc = (element: ReactNode) => {
        setCurrentElement(mobileBannerKeys.year)
        setIsYearButtonActive(true)
        setIsIntensiveButtonActive(false)
    }

    const intensiveButtonFunc = (element: ReactNode) => {
        setCurrentElement(mobileBannerKeys.intensive)
        setIsYearButtonActive(false)
        setIsIntensiveButtonActive(true)
    }


    return (
        <div className={lightTheme ? classes.container : classes.dark__container}>
            {currentElement}

            <div className={classes.toggle}>
                <MobileBannerButton isActive={isYearButtonActive} onClick={() => yearButtonFunc(mobileBannerKeys.year)}/>
                <MobileBannerButton isActive={isIntensiveButtonActive} onClick={() => intensiveButtonFunc(mobileBannerKeys.intensive)}/>
            </div>
        </div>
    );
};

export default MobileBanner;