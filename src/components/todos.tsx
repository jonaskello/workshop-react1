import * as React from "react";
import * as Store from "../store";
import * as TodosReducer from "../reducers/todos-reducer";

export interface TodosProps {
}

export function TodosComponent(props: TodosProps): React.ReactElement<TodosProps> {
    return (
        <div>
            Number of todos: {Store.getState().todos.length}
            {Store.getState().todos.map((todo) => <div key={todo.key}>{todo.description}</div>)}
            <input type="text"
                value={Store.getState().newTodo}
                onChange={(event) => Store.dispatch(TodosReducer.createUpdateNewTodoAction(event.target.value))} />
            <button onClick={() => Store.dispatch(TodosReducer.createAddTodoAction())}>Add todo</button>
        </div>
    );
}

