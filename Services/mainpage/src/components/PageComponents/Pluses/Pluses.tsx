import { FC, useContext, useState } from "react";
import classes from './Pluses.module.css'
import { BlueButton, ThemeContext } from "@packages/shared";
import { plusesArray } from "@/utils/Pluses";
import aiPng from '@packages/shared/src/assets/chat-bot-pluses.png'
import ArrowButton from "@/components/UI/ArrowButton/ArrowButton";
import RightArrow from '@packages/shared/src/assets/right-arrow-con.svg'
import LeftArrow from '@packages/shared/src/assets/left-arrow-svg.svg'

const Pluses: FC = () => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'
    const [indexCurrentElement, setIndexCurrentElement] = useState<number>(0)

    const addIndex = () => {
        if (indexCurrentElement === plusesArray.length - 1) {
            setIndexCurrentElement(0)
        }

        else {
            setIndexCurrentElement(prev => prev + 1)
        }

        console.log(indexCurrentElement);
        
    }

    const deleteIndex = () => {
        if(indexCurrentElement === 0) {
            setIndexCurrentElement(plusesArray.length - 1)
        }

        else {
            setIndexCurrentElement(prev => prev - 1)
        }
    }

    return (
        <div className={lightTheme ? classes.container : classes.dark__container}>
            <div className={classes.container__content}>
                <div className={classes.base__info}>
                    <div className={classes.base__content}>
                        <h2>Получи бесплатный доступ <br/>к авторской базе задач</h2>
                        <a className={classes.button__container} href="https://t.me/DimaChatChips">
                            <BlueButton>Перейти</BlueButton>
                        </a>
                        <p>Выбирай тематику и сложность заданий, <br/> оттачивай мастерство на методически подобранных задачах. <br/> Изучай подробные решения в ответах.</p>
                        <picture className={classes.chat__img}>
                            <img src={aiPng} alt={aiPng} />
                        </picture>
                    </div>
                </div>

                <div className={classes.slider}>
                    <div className={classes.slider__text}>
                        <h2>Преимущества платформы MindMasters</h2>
                        <p className={classes.count}><span className={classes.span__bold}>0{indexCurrentElement + 1}</span> из 0{plusesArray.length}</p>
                        <p className={classes.title}>{plusesArray[indexCurrentElement].title}</p>
                        <p className={classes.text}>{plusesArray[indexCurrentElement].text}</p>
                    </div>
                    <picture className={classes.img}>
                        <img src={plusesArray[indexCurrentElement].img} alt={plusesArray[indexCurrentElement].img} />
                    </picture>
                </div>
                <div className={classes.toggle__slider}>
                        <div className={classes.button__container}>
                            <ArrowButton onClick={() => deleteIndex()}><LeftArrow/></ArrowButton>
                            <ArrowButton onClick={() => addIndex()}><RightArrow/></ArrowButton>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Pluses;