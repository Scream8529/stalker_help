import React, { useContext, useState } from "react";
import { RouterComponents } from "../../models/router-components";
import { RouterContext } from "../router";
import style from "./styles.module.css";

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
                    <li
                        onClick={toggleRoute("reputation")}
                        className={style.navigation__item}
                    >
                        <button>Калькулятор репутации</button>
                    </li>
                    <li
                        onClick={toggleRoute("questions")}
                        className={style.navigation__item}
                    >
                        <button>Вопросы контроллера</button>
                    </li>
                    <li
                        onClick={toggleRoute("faq")}
                        className={style.navigation__item}
                    >
                        <button>FAQ</button>
                    </li>

                </ul>
            </nav>
        </>

    );
}
