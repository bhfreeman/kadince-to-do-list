import React, { useState } from "react";
import API from "../utils/API";

function ToDo({ title, text, isComplete, id }) {
  const buttonStyle = "bg-purple-400 rounded-md m-1 p-1 min-w-24";

  const [todo, setTodo] = useState({
    title: title,
    text: text,
    id: id,
    isComplete: isComplete
  });
  const [toggleEdit, setToggleEdit] = useState(false);

  async function deleteTodo(id) {
    // await API.deleteTodo(id)
  }

  function editTodo(todo) {}

  function handleComplete() {
      setTodo({...todo, isComplete: !isComplete})
  }

  function handleEditToggle() {
    setToggleEdit(!toggleEdit);
  }

  function handleSaveEdit() {
    setToggleEdit(!toggleEdit);
  }

  return (
    <div
      className={
        isComplete
          ? "w-64 border-black border-2 opacity-50"
          : "w-64 border-black border-2"
      }
    >
      {!toggleEdit && (
        <div>
          <h1 className="text-center">ToDo: {title}</h1>
          {text && <p className="text-center">Description: {text}</p>}
          <button className={buttonStyle} onClick={handleEditToggle}>
            Edit
          </button>
          <button className={buttonStyle} onClick={() => deleteTodo(id)}>
            Delete
          </button>
          <button className={buttonStyle} onClick={handleComplete}>
            {isComplete ? "Undo Complete" : "Complete"}
          </button>
        </div>
      )}
      {toggleEdit && (
        <div>
          <label>Title</label>
          <input type="text" value={todo.title}></input>
          <label>Description:</label>
          <textarea value={todo.text} ></textarea>
          <button className={buttonStyle} onClick={handleSaveEdit}>
            Save Edit
          </button>
        </div>
      )}
      {/* todo text */}
      {/* todo title? */}
      {/* edit and delete buttons */}
      {/* complete todo toggle */}
    </div>
  );
}

export default ToDo;
