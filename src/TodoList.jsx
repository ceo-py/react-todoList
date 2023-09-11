import {TodoItem} from "./TodoItem.jsx";

// eslint-disable-next-line react/prop-types
export function TodoList({todos, toggleTodo, deleteTodo}) {

    return (
        <ul className="list">
            {/* eslint-disable-next-line react/prop-types */}
            {todos.map(todo => {
                return <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            })}
        </ul>
    )

}