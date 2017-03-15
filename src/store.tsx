import * as TodosReducer from "./todos/reducer";
import * as PersonsReducer from "./persons/reducer";
import * as RootReducer from "./root-reducer";

export interface Action {
    type: string,
    payload?: any,
}

let state: RootReducer.RootState = {
    todos: undefined,
    persons: undefined,
};

let callback;

export function subscribe(c: () => void) {
    callback = c;
}

export function dispatch(action: Action) {
    console.log("BEFORE", state);
    console.log("DISPATCH: ", action);
    const newState = RootReducer.reduce(getState(), action);
    state = newState;
    console.log("AFTER", newState);
    if (callback)
        callback();
}

export function getState(): RootReducer.RootState {
    return state;
}
