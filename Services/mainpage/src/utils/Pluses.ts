import { PlusesType } from "@/types/pluses";
import platform from '@packages/shared/src/assets/platform-slider.png'
import first from '@packages/shared/src/assets/slider-first.png'
import second from '@packages/shared/src/assets/slider-second.png'
import vebinar from '@packages/shared/src/assets/slider-veb.png'
import probniki from '@packages/shared/src/assets/slider-probniki.png'
import statistic from '@packages/shared/src/assets/slider-static.png'


export const plusesArray: PlusesType[] = [
    {id: 1, img: platform, title: 'Собственная образовательная платформа', text: 'Всё обучение проходит в одной экосистеме'},
    {id: 2, img: vebinar, title: 'Вебинары и видеоуроки', text: 'Обучение происходит полностью в онлайн формате, что поможет сэкономить время на путь до занятий и дома!'},
    {id: 3, img: first, title: 'ДЗ по 1-й части с автопроверкой', text: 'Проверка происходит с помощью алгоритмов, поэтому ты сразу сможешь увидеть свои ошибки и разобрать их'},
    {id: 4, img: second, title: 'ДЗ по 2-й части с экспертной проверкой', text: 'Наши эксперты не просто выставляют баллы за работу, но и комментируют и объясняют ошибки'},
    {id: 5, img: probniki, title: 'Пробники 2 раза в месяц', text: 'Проверяй свои знания, проходя пробные варианты экзаменов'},
    {id: 6, img: statistic, title: 'Статистика и прогресс', text: 'Отслеживай свой прогресс, используя статистику на платформе'},
]