import { useState } from "react"

function TodoInput() {
    const [inputValue , setInputValue] = useState("");

    function handleChange(event) {
        setInputValue(event.target.value);
    }
  return (
    <>
    <div>
        <h1>Todo List App</h1>
        <input type="text" placeholder="Enter Your Todos" onChange={handleChange} value={inputValue}/>
        <button>Add + </button>
    </div>
    
    </>
    
  )
}

export default TodoInput