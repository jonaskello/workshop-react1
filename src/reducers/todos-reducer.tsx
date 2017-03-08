import * as Store from "../store";

export interface TodoItem {
    key: number,
    description: string,
}

export const updateNewTodoAction = "updateNewTodoAction";
export const addTodoAction = "addTodoAction";

export function createUpdateNewTodoAction(value: string) {
    return {type: updateNewTodoAction, payload: value}
}
export function createAddTodoAction() {
    return {type: addTodoAction}
}

export function reduce(state: Store.State, action: Store.Action): Store.State {

    switch (action.type) {
        case updateNewTodoAction:
            return {
                ...state,
                newTodo: action.payload,
            };
        case addTodoAction:
            return {
                ...state,
                nextTodoKey: state.nextTodoKey + 1,
                todos: [...state.todos, { key: state.nextTodoKey, description: state.newTodo }]
            };
    }

}
