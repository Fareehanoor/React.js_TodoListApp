import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  // Add new item
  function addButton(input) {
    if(input !== ""){
      setTodoList([...todoList, input]);
    }
  }

  // Delete item by index
  function deleteItem(key) {
    const newList = [...todoList];
    newList.splice(key, 1);
    setTodoList([...newList]);
  }

  return (
    <>
      <div className="bg-slate-300 min-h-screen flex items-center justify-center">
        <div className="w-96 flex flex-col mx-auto h-auto bg-slate-500 rounded-lg shadow-2xl p-4">
          <TodoInput addButton={addButton} />

          <div className="bg-slate-400 p-3 rounded-lg mt-4 max-h-60 overflow-y-auto">
            <ul className="list-none">
              {todoList.map((list, index) => (
                <TodoList
                  key={index}
                  index={index}
                  items={list}
                  deleteButton={deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
