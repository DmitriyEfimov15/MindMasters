import { FC, useContext } from "react";
import classes from './CatalogElement.module.css'
import { CatalogKey } from "@/types/catalog";
import { ThemeContext } from "@packages/shared";

interface CatalogElementProps {
    currentElement: CatalogKey
}

const CatalogElement: FC<CatalogElementProps> = ({currentElement}) => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'
    
    return (
        <div className={lightTheme ? classes.container : classes.container__dark}>
            <div className={classes.content}>
                <div className={classes.text__container}>
                    <p className={classes.number}>{currentElement.firstInformation.number}</p>
                    <p className={classes.information}>{currentElement.firstInformation.information}</p>
                </div>

                <div className={classes.text__container}>
                    <p className={classes.number}>{currentElement.secondInformation.number}</p>
                    <p className={classes.information}>{currentElement.secondInformation.information}</p>
                </div>

                <div className={classes.text__container}>
                    <p className={classes.number}>{currentElement.thirdInformation.number}</p>
                    <p className={classes.information}>{currentElement.thirdInformation.information}</p>
                </div>
            </div>
        </div>
    )
}

export default CatalogElement;