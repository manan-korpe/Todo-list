import './App.css'
import Update from "./Update.jsx";
import {useState, createContext, useRef, useEffect} from "react";

export const userContext = createContext();

function App() {
  const [input, setInput] = useState("");
  const [todo,setTodo] = useState([]);
  const [done,setDone] = useState([]);
  const inputref = useRef();

  useEffect(()=>{
    inputref.current?.focus();
  },[todo]);

  function manageTodo(e){
    e.preventDefault();
    if(!input.trim()){
      alert("Enter your TODO");
      inputref.current.focus();

    }else{
      let newTodo = [...todo,input];
      setTodo(newTodo);
      setInput("");
    }

  }

  function removeAll(){
    setTodo([]);
    setDone([])
  }

  return (
    <userContext.Provider value={{todo:todo,setTodo:setTodo,done:{done:done,setDone:setDone}}}>
      < div className="main-div">
        <input type="text" ref={inputref} value={input} onChange={obj => setInput(obj.target.value)}/>

        <div>
            <button onClick={manageTodo}>Submit</button>
            <button onClick={removeAll}>Clear All</button>  
        </div>

        <div>
          total todo :- {todo.length}
          &nbsp;
          total done :- {done.length}
          &nbsp;
          total pending :- {todo.length - done.length}
        </div>

        <table className="todo-table">
              <tr>
                  <th>Todo List</th>
              </tr>
              {todo.map((val,uniq)=> <Update key={uniq} id={uniq} value={val} /> )}
        </table>
      </div>
    </userContext.Provider>
  )
}

export default App
