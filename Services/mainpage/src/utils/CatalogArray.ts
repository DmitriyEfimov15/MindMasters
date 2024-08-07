import { Catalog } from "@/types/catalog";
import EgePng from '@packages/shared/src/assets/catalog-studying-bro.png'
import OgePng from '@packages/shared/src/assets/catalog-books.png'
import StudentPng from '@packages/shared/src/assets/catalog-glasses.png'
import DVIPng from '@packages/shared/src/assets/catalog-study-online.png'
import SchoolPlusPng from '@packages/shared/src/assets/catalog-capybara.png'

export const catalogArray: Catalog[] = [
    {img: EgePng, title: 'ЕГЭ'},
    {img: OgePng, title: 'ОГЭ'},
    {img: DVIPng, title: 'Олимпиады и ДВИ'},
    {img: SchoolPlusPng, title: 'Школа+'},
    {img: StudentPng, title: 'Студентам'},
    {img: '', title: 'Каталог всех курсов'}
]