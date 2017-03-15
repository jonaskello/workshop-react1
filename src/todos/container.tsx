import * as React from "react";
import * as Store from "../store";
import * as TodosReducer from "./reducer";
import * as TodosActions from "./actions";
import { todoItem } from "./components/todo-item";
import { TodoItem } from "./types";

export interface TodosProps {
}

export function TodosComponent(props: TodosProps): React.ReactElement<TodosProps> {
    return (
        <div>
            Number of todos: {Store.getState().todos.todos.length}

            {Store.getState().todos.todos.map((todo: TodoItem) => todoItem({todo, dispatch: Store.dispatch}))}

            <input type="text"
                value={Store.getState().todos.newTodo}
                onChange={(event) => Store.dispatch(TodosActions.createUpdateNewTodoAction(event.target.value))} />
            <button onClick={() => Store.dispatch(TodosActions.createAddTodoAction())}>Add todo</button>

        </div>
    );
}

