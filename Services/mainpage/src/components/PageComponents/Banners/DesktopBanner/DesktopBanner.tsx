import {FC, ReactNode, useContext} from 'react';
import classes from './DesktopBanner.module.css'
import BannerButton from "@/components/UI/BannerButton/BannerButton";
import {objectLen} from "@/utils/objectLen";
import {Banner} from "@/types/banner";
import {ThemeContext} from "@packages/shared";

interface DesktopBannerProps {
    currentElement: ReactNode,
    isButtonYearActive: boolean,
    isButtonIntensiveActive: boolean,
    bannerKeys: Banner,
    yearButtonFunc: (arg: ReactNode) => void,
    intensiveButtonFunc: (arg: ReactNode) => void,
 }

const DesktopBanner: FC<DesktopBannerProps> = ({currentElement, bannerKeys, isButtonIntensiveActive, isButtonYearActive, yearButtonFunc, intensiveButtonFunc }) => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'

    return (
        <div className={lightTheme ? classes.container : classes.dark__container}>
            {currentElement}

            <div className={classes.toggle}>
                <p>01</p>
                <div className={classes.banner__items}>
                    <BannerButton isButtonActive={isButtonYearActive} onClick={() => yearButtonFunc(bannerKeys.year)}>Годовой</BannerButton>
                    <BannerButton isButtonActive={isButtonIntensiveActive} onClick={() => intensiveButtonFunc(bannerKeys.intensive)}>Интенсивы</BannerButton>
                </div>
                <p>0{objectLen(bannerKeys)}</p>
            </div>
        </div>
    );
};

export default DesktopBanner;