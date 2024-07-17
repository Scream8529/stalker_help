import React, { useContext, useState } from "react";
import { RouterComponents } from "../../models/router-components";
import { RouterContext } from "../router";
import style from "./styles.module.css";

interface MenuItem {
    id: number;
    text: string;
    route: RouterComponents
}

const navigationMenu: MenuItem[] = [
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


export default function Navigation() {
    const router = useContext(RouterContext);
    const [showNavigation, setShowNavigation] = useState(false)

    function toggleShowNavigation() {
        setShowNavigation(prev => !prev)
    }

    function toggleRoute(e: RouterComponents) {
        return () => {
            setShowNavigation(false)
            router?.setCurrentComponents(e);
        };
    }
    return (
        <>
            <button className={style.burger__button} onClick={toggleShowNavigation}>
                <div className={style.burger__line} />
                <div className={style.burger__line} />
                <div className={style.burger__line} />
            </button>
            <nav className={style.container} style={showNavigation ? { display: 'block' } : {}}>
                <div className={style.logo} />
                <ul className={style.navigation}>
                    {
                        navigationMenu.map(navItem => (
                            <li
                                onClick={toggleRoute(navItem.route)}
                                className={style.navigation__item}
                            >
                                <button>{navItem.text}</button>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>

    );
}
