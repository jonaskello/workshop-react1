import * as React from "react";
import * as Store from "../store";
import {TodosComponent} from "./todos";

export interface RootProps {
}

export function RootComponent(props: RootProps): React.ReactElement<RootProps> {
    return (
        <TodosComponent />
    );
}

