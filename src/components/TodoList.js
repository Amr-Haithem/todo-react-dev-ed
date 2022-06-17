import Todo from './Todo';
const TodoList = ({todoes,settodoes,FilteredTodoes}) => {
    return ( 
    <div className="todo-container">
        <ul className="todo-list">
            {
                FilteredTodoes.map(todo=>(
                    <Todo settodoes={settodoes} todoes={todoes} key={todo.id} todo={todo}/>
    ))
            }
        </ul>
    </div>
     );
}
 
export default TodoList;