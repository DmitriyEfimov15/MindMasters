import { FC, useContext } from "react";
import classes from './CatologBlock.module.css'
import { ThemeContext } from "@packages/shared";

interface CatologBlockProps {
    img?: string,
    title: string,
    number: number
}

const CatologBlock: FC<CatologBlockProps> = ({img, title, number}) => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'


    if(img !== '') {
        return (
            <div className={lightTheme ? classes.block : classes.dark__block}>
                <div className={classes.content}>
                    <p className={classes.title}>{title}</p>
                    <picture className={classes.img__container}>
                        <img src={img} alt={title} />
                    </picture>
                    <p className={classes.number}>0{number}</p>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className={lightTheme ? classes.last__block : classes.dark__last__block}>
                <p>{title}</p>
            </div>
        )
    }
}

export default CatologBlock;