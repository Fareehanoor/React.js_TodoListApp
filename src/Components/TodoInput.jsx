import { useState } from "react";

function TodoInput({ addButton }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <>
      <h1 className="text-3xl mb-4 text-center mt-2">Todo List App</h1>
      <div className="flex flex-row gap-2 mx-auto items-center">
        <input
          type="text"
          placeholder="Enter Your Todos"
          onChange={handleChange}
          value={inputValue}
          className="m-3 p-2 border-solid border-2 border-black-600 rounded-sm "
        />
        <button
          className="bg-black text-white w-12 h-12 rounded-full"
          onClick={() => {
            addButton(inputValue);
            setInputValue("");
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default TodoInput;
