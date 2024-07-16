import React, { createContext, useState } from "react";
import { RouterComponents } from "../../models/router-components";
import { MainLayout } from "../../layouts";
import { QuestionsContainer, ReputationContainer } from "../../containers";

const components: { [k in RouterComponents]: JSX.Element } = {
    reputation: <ReputationContainer />,
    questions: <QuestionsContainer />
};

export const RouterContext = createContext<null | {
    setCurrentComponents: (e: RouterComponents) => void;
}>(null);

export default function Router() {
    const [currentComponents, setCurrentComponents] =
        useState<RouterComponents>("reputation");

    return (
        <RouterContext.Provider value={{ setCurrentComponents }}>
            <MainLayout>{components[currentComponents]}</MainLayout>
        </RouterContext.Provider>
    );
}
