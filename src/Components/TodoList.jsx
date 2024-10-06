
function TodoList({ items, deleteButton, index }) {
    return (
      <li className="flex justify-between items-center bg-white p-2 mb-2 rounded-lg shadow-md">
        <span>{items}</span>
        <i
          className="fa-solid fa-trash-can cursor-pointer"
          onClick={() => deleteButton(index)}
        ></i>
      </li>
    );
  }
  
  export default TodoList;
  