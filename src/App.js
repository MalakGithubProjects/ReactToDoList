
import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos,setTodos] = useState([]);

  const inputReft=useRef()
   
  const HandleAddTodo=()=>{
      
     const text=inputReft.current.value;
     const newItem={completed:false,text}
     setTodos([...todos,newItem])//this is javascript functionality keep the old value of todos(...todos) and add the new value newItem
     inputReft.current.value="";
  }

    const handleItemDone=(index)=>{
      const newTodos=[...todos]
      newTodos[index].completed=!newTodos[index].completed
      setTodos(newTodos)
    }

    const handleDeleteItem=(index)=>{
      const newTodos=[...todos]
      newTodos.splice(index,1)
      setTodos(newTodos)
    }
  return (
    <div className="App">
    <h2>ToDo List</h2>
    <div className='to-do-container'>
    <ul>
      {todos.map(({text,completed},index) => {
         return (
         <div className='item'>
         <li className={completed?"done":""} key={index} onClick={()=>handleItemDone(index)}>{text}</li>
         <span onClick={()=>handleDeleteItem(index)} className='trash'>❌</span>
         </div>
         );
         })}


    </ul>
    <input ref={inputReft}placeholder='Enter Item..'></input>
    <button onClick={HandleAddTodo}>Add</button>

    </div>
    </div>
  );
}

export default App;
