import React, { createContext, useState } from "react";
import { RouterComponents } from "../../models/router-components";
import { MainLayout } from "../../layouts";
import { FaqContainer, QuestionsContainer, ReputationContainer, RulesContainer } from "../../containers";

const components: { [k in RouterComponents]: JSX.Element } = {
    rules: <RulesContainer />,
    reputation: <ReputationContainer />,
    questions: <QuestionsContainer />,
    faq: <FaqContainer />,
};

export const RouterContext = createContext<null | {
    setCurrentComponents: (e: RouterComponents) => void;
}>(null);

export default function Router() {
    const [currentComponents, setCurrentComponents] =
        useState<RouterComponents>("rules");

    return (
        <RouterContext.Provider value={{ setCurrentComponents }}>
            <MainLayout>{components[currentComponents]}</MainLayout>
        </RouterContext.Provider>
    );
}
