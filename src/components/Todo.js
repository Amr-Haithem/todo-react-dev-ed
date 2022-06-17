const Todo = ({todo,settodoes,todoes}) => {
    const deleteHandler=()=>{
        settodoes(todoes.filter((el)=> el.id!==todo.id))
    }
    const completeHandler=()=>{
        settodoes(todoes.map(item=>{
            if(item.id===todo.id){
                return{...todo,completed:!todo.completed}
            }
            return item
        }))

    }
    return ( 
        <div className="todo">
            <li className={`todo-item ${todo.completed?'completed':''}`}>{todo.text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
     );
}
 
export default Todo;