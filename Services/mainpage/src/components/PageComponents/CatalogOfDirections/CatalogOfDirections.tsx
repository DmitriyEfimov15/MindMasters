import {FC, useContext, useState} from 'react';
import classes from './CatalogOfDirections.module.css'
import {ThemeContext} from "@packages/shared";
import { catalogArray } from '@/utils/CatalogArray';
import CatalogBlock from '../../UI/CatologBlock/CatologBlock'
import RightArrow from '@packages/shared/src/assets/right-arrow-con.svg'
import ToggleButton from '@/components/UI/ToggleButton/ToggleButton';
import { catalogKey } from '@/utils/catalogKey';
import CatalogElement from '@/components/UI/CatalogElement/CatalogElement';
import { CatalogKey } from '@/types/catalog';

const CatalogOfDirections: FC = () => {
    const {theme} = useContext(ThemeContext)
    const lightTheme = theme === 'light'
    const [currentElement, setCurrentElement] = useState<CatalogKey>(catalogKey[0])

    return (
        <div className={lightTheme ? classes.container : classes.container__dark}>
            <h2>Направления подготовки на платформе MindMasters</h2>

            <div className={classes.content__container}>
                <div className={classes.content__blocks}>
                    {catalogArray.map(item => <CatalogBlock key={item.title} img={item.img} title={item.title} number={catalogArray.indexOf(item) + 1}></CatalogBlock>)}
                </div>
            </div>

            <a href='https://t.me/DimaChatChips' className={classes.consultation}>
                <p>Нужна консультация? Задайте нам вопрос в чате.</p>
                <div className={classes.svg__container}>
                    <RightArrow className={classes.svg}/>
                </div>
            </a>

            <div className={classes.statistic}>
                <h2>Получайте знания, которые помогут вам поступить <br/> в топовый ВУЗ и освоить профессию мечты</h2>

                <div className={classes.toggle__contanier}>
                    <ToggleButton isActive={currentElement.id === catalogKey[0].id} onClick={() => setCurrentElement(catalogKey[0])}>Статистика платформы</ToggleButton>
                    <ToggleButton isActive={currentElement.id === catalogKey[1].id} onClick={() => setCurrentElement(catalogKey[1])}>ЕГЭ-2022</ToggleButton>
                    <ToggleButton isActive={currentElement.id === catalogKey[2].id} onClick={() => setCurrentElement(catalogKey[2])}>ЕГЭ-2021</ToggleButton>
                </div>

                <div className={classes.current_element}>
                    <CatalogElement currentElement={currentElement}/>
                </div>
            </div>
        </div>
    );
};

export default CatalogOfDirections;