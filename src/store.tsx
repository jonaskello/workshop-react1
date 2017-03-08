import * as ReactDOM from "react-dom";
import * as React from "react";
import { RootComponent } from "./components/root"
import * as RootReducer from "./reducers/todos-reducer";

export function dispatch(action: Action) {
    const newState = RootReducer.reduce(getState(), action);
    setState(newState);
}

export interface Action {
    type: string,
    payload?: any,
}

export interface State {
    newTodo: string,
    nextTodoKey: number,
    todos: Array<RootReducer.TodoItem>,
}

let state: State = {
    newTodo: "New todo",
    nextTodoKey: 3,
    todos: [
        { key: 1, description: "Learn react" },
        { key: 2, description: "Setup webpack" }
    ],
};

export function setState(newState: State) {
    state = newState;
    render();
}

export function getState(): State {
    return state;
}

export function render() {

    ReactDOM.render(
        RootComponent({}),
        document.getElementById('root')
    );

}
