import React, { PropsWithChildren, createContext, useState } from "react";
import Navigation from "../../components/navigation";

interface ContextState {
    state: any;
    setState: (e: any) => void;
}

export const StateContext = createContext<ContextState>({
    state: {},
    setState: (e) => { },
} as ContextState);

export default function MainLayout(props: PropsWithChildren<{}>) {
    const [state, setState] = useState({});

    return (
        <StateContext.Provider value={{ state, setState }}>
            <Navigation />
            <div>{props.children}</div>
        </StateContext.Provider>
    );
}
