import * as React from "react";
import * as Store from "../store";
import * as PersonsReducer from "./reducer";
import * as PersonsActions from "./actions";

export interface PersonsProps {
}

export function PersonsComponent(props: PersonsProps): React.ReactElement<PersonsProps> {
    return (
        <div>
            Number of persons: {Store.getState().persons.persons.length}
            {Store.getState().persons.persons.map((person) => <div key={person.key}>{person.description}</div>)}
            <input type="text"
                value={Store.getState().persons.newPerson}
                onChange={(event) => Store.dispatch(PersonsActions.createUpdateNewPersonAction(event.target.value))} />
            <button onClick={() => Store.dispatch(PersonsActions.createAddPersonAction())}>Add person</button>
        </div>
    );
}

