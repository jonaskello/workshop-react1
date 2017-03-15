import * as React from "react";
import * as PersonsReducer from "./reducer";
import * as PersonsActions from "./actions";
import { PersonList } from "./components/person-list";
import { PersonsState } from "./reducer";
import { RootState } from "../reducer";
import { createContainer } from "../create-container";

export interface OwnProps {
    color: string,
}

export interface StateProps {
    state: RootState,
    dispatch: any,
}

export type Props = OwnProps & StateProps;

export const PersonsContainer = createContainer(PersonsComponent);

function PersonsComponent({ state, dispatch, color }: Props) {
    return (
        <PersonList dispatch={dispatch}
            persons={state.persons.persons}
            newPerson={state.persons.newPerson}
            color={color} />
    );

}
