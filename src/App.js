import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';
import React,{useState,useEffect} from 'react'
                          

function App() {
  const [InputText, setInputText] = useState("");
  const [todoes, settodoes] = useState([]);
  const [status, setstatus] = useState("all");
  const [FilteredTodoes, setFilteredTodoes] = useState([]);
  useEffect(() => {
    getLocalTodoes();
    
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalTodoes();
  }, [todoes,status]);
  const filterHandler=()=>{
    switch (status){
      case "completed":
        setFilteredTodoes(todoes.filter(todo=>todo.completed===true));
        break
      case "uncompleted":
        setFilteredTodoes(todoes.filter(todo=>todo.completed===false));
        break
      default:
        setFilteredTodoes(todoes);
        break
    }
  }
  const saveLocalTodoes=()=>{
    localStorage.setItem('todoes',JSON.stringify(todoes));
  }
  const getLocalTodoes=()=>{
    if(localStorage.getItem('todoes')===null){
      localStorage.setItem('todoes',JSON.stringify([]))
    }else{
    let todoLocal =  JSON.parse(localStorage.getItem('todoes'));
    settodoes(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List</h1>
      </header>
      <Form InputText={InputText} setInputText={setInputText} settodoes={settodoes} todoes={todoes} setstatus={setstatus} />
      <TodoList settodoes={settodoes} todoes={todoes} FilteredTodoes={FilteredTodoes}/>
    </div>
    
  );
}

export default App;
