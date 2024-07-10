import React, { useContext } from "react";
import { RouterComponents } from "../../models/router-components";
import { RouterContext } from "../router";
import style from "./styles.module.css";

export default function Navigation() {
    const router = useContext(RouterContext);

    function toggleRoute(e: RouterComponents) {
        return () => {
            router?.setCurrentComponents(e);
        };
    }
    return (
        <nav className={style.container}>
            <ul className={style.navigation}>
                <li
                    onClick={toggleRoute("kalkulator")}
                    className={style.navigation__item}
                >
                    <button>Калькулятор репутации</button>
                </li>
            </ul>
        </nav>
    );
}
