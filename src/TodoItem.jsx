// eslint-disable-next-line react/prop-types
export function TodoItem({id, completed, title, toggleTodo, deleteTodo}) {

    return (
        <li key={id}>
            <label>
                <input
                    checked={completed}
                    type="checkbox"
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button
                className="btn btn-danger"
                onClick={() => deleteTodo(id)}
            >Delete
            </button>
        </li>
    )
}