import * as React from "react";
import * as Store from "./store";
import { TodosComponent } from "./todos/container";
import { PersonsComponent } from "./persons/persons";

export interface RootProps {
}

export function RootComponent(props: RootProps): React.ReactElement<RootProps> {
    return (
        <div>
            <span>TODOS:</span>
            <TodosComponent />
            <span>PERSONS:</span>
            <PersonsComponent />
        </div>
    );
}

