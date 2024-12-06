import { MenuItem } from "../models/navigation";

export const navigationMenu: MenuItem[] = [
    {
        id: 0,
        text: 'Правила',
        route: 'rules'
    },
    {
        id: 1,
        text: 'Вопросы контроллера',
        route: 'questions'
    },
    {
        id: 2,
        text: 'FAQ',
        route: 'faq'
    },
    {
        id: 3,
        text: 'Калькулятор репутации',
        route: 'reputation'
    }
]