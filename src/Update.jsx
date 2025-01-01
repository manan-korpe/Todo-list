import './App.css'
import {useContext} from "react"
import {userContext} from "./App.jsx";

export default function Update({value,key,id}){
    
    const {todo,setTodo,done } = useContext(userContext);
    const checked = done.done.includes(id) || false;

    function remove(){
        const newTodo = todo.filter((val,i)=> {
            if(id!=i){
                return val
            }
        })
        updateCheckbox();
        setTodo(newTodo);
    }

    function updateCheckbox(){
        if(done.done.includes(id)){
            const newDone = done.done.filter((val) => id != val)
            done.setDone(newDone);
        }else{
            done.setDone([...done.done,id])
        }
    }
    return (
        <>  
                <tr>
                <td style={{borderColor:checked ? "green": "red"}}> 
                        <input type="checkbox" onChange={updateCheckbox} checked={checked}/>
                        
                        {value}<button onClick={remove}> - </button>
                    </td>
                </tr>
        </>
    )
}