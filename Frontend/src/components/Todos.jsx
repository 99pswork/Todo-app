
export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div class="todoList">
                <h4 class="heading">{todo.title}</h4>
                <p class="description">{todo.description}</p>
                <button class="to-do-button">{todo.completed == true ? "Completed": "Mark as Completed"}</button>
            </div>
        })}
    </div>
}