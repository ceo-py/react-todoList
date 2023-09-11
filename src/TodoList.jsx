import {TodoItem} from "./TodoItem.jsx";

export function TodoList({todos, toggleTodo, deleteTodo}) {

    return (
        <ul className="list">
            {todos.map(todo => {
                return <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            })}
        </ul>
    )

}