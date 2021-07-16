import React, { useState } from "react";
import API from "../utils/API";

function ToDo({ title, text, isComplete, id, setLists, list_id }) {
  const buttonStyle = "bg-purple-400 rounded-md m-1 p-1 min-w-24";

  const [todo, setTodo] = useState({
    title: title,
    text: text,
    id: id,
    list_id: list_id,
    isComplete: isComplete
  });
  const [toggleEdit, setToggleEdit] = useState(false);

  async function deleteTodo() {
    await API.deleteTodo(todo.id)
    const response = await API.getLists();
    setLists(response.data)
  }

  async function handleComplete() {
    //   setTodo({...todo, isComplete: !isComplete})
    if(!isComplete) {
        await API.completeTodo(id)
    } else {
        await API.undoComplete(id)
    }
    const response = await API.getLists();
    setLists(response.data)
  }

  function handleEditToggle() {
    setToggleEdit(!toggleEdit);
  }

  async function handleSaveEdit() {
      try{
          await API.updateTodo(todo)
        setToggleEdit(!toggleEdit);
        const response = await API.getLists();
        setLists(response.data)
      } catch(err){
          console.log(err)
      }
    
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
          <button className={buttonStyle} onClick={deleteTodo}>
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
          <input type="text" onChange={(e) => setTodo({...todo, title: e.target.value})}></input>
          <label>Description:</label>
          <textarea onChange={(e) => setTodo({...todo, text: e.target.value})} ></textarea>
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
