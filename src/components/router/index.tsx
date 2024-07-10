import React, { createContext, useState } from "react";
import { RouterComponents } from "../../models/router-components";
import {
    MainContainer,
} from "../../containers";
import { MainLayout } from "../../layouts";

const components: { [k in RouterComponents]: JSX.Element } = {
    kalkulator: <MainContainer />,
};

export const RouterContext = createContext<null | {
    setCurrentComponents: (e: RouterComponents) => void;
}>(null);

export default function Router() {
    const [currentComponents, setCurrentComponents] =
        useState<RouterComponents>("kalkulator");

    return (
        <RouterContext.Provider value={{ setCurrentComponents }}>
            <MainLayout>{components[currentComponents]}</MainLayout>
        </RouterContext.Provider>
    );
}
