const Form = ({setInputText,settodoes,todoes,InputText,setstatus,FilteredTodoes}) => {
    //here we can make a functioin to pass it to the state in the app.js
    const inputTextHandler=(e)=>{
        setInputText(e.target.value);
    }
    const sumbitTodoHandler=(e)=>{
        e.preventDefault();
        settodoes(
            [
                ...todoes,{text:InputText,completed:false,id:Math.random()*1000}
            ]
        );
        setInputText("");
    }
    const statusHandler=(e)=>{
      setstatus(e.target.value)

    }
    return ( 
        <form>
      <input value={InputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={sumbitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
     );
}
 
export default Form;