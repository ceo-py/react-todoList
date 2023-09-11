import {useEffect, useState} from "react";
import "./styles.css";
import {NewTodoForm} from "./NewTodoForm.jsx";
import {TodoList} from "./TodoList.jsx";

export default function App() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem('TODOS')
        return localValue ? JSON.parse(localValue) : []
    })

    useEffect(() => {
        localStorage.setItem('TODOS', JSON.stringify(todos))
    }, [todos])


    function addTodo(title) {
        setTodos(currentTodos => {
            return [
                ...currentTodos, {
                    id: crypto.randomUUID(),
                    title,
                    completed: false
                }
            ]
        })
    }

    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) return {...todo, completed}
                return todo
            })
        })
    }

    function deleteTodo(id) {
        setTodos(currentTodos => {
            return [...currentTodos.filter(todo => todo.id !== id)]
        })
    }

    return (<>
        <NewTodoForm addTodo={addTodo}/>
        <h1 className="header">Todo List</h1>
        {todos.length === 0 && "No Todos"}
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>)
}