import React, { useState } from "react";
import API from "../utils/API";

function ToDo({ title, text, isComplete, id, setLists, list_id }) {
  const buttonStyle = "bg-purple-400 rounded-md m-1 p-1 min-w-24";

  const [todo, setTodo] = useState({
    title: title,
    text: text,
    id: id,
    list_id: list_id,
    isComplete: isComplete,
  });
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleTodoBody, setToggleTodoBody] = useState(false);

  async function deleteTodo() {
    await API.deleteTodo(todo.id);
    const response = await API.getLists();
    setLists(response.data);
  }

  async function handleComplete() {
    //   setTodo({...todo, isComplete: !isComplete})
    if (!isComplete) {
      await API.completeTodo(id);
    } else {
      await API.undoComplete(id);
    }
    const response = await API.getLists();
    setLists(response.data);
  }

  function handleEditToggle() {
    setToggleEdit(!toggleEdit);
  }

  async function handleSaveEdit() {
    try {
      await API.updateTodo(todo);
      setToggleEdit(!toggleEdit);
      const response = await API.getLists();
      setLists(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      className={
        isComplete
          ? "w-64 border-black border-2 rounded-xl opacity-50 mb-2 "
          : "w-64 border-black border-2 rounded-xl mb-2"
      }
    >
      {!toggleEdit && (
        <div>
          <div className="grid grid-flow-col">
              {isComplete ? <svg onClick={handleComplete} className="w-6 h-6 cursor-pointer " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> : <svg onClick={handleComplete} className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            <h1
              onClick={() => setToggleTodoBody(!toggleTodoBody)}
              className="cursor-pointer"
            >
              {title}
            </h1>
          </div>
          {toggleTodoBody && (
            <div>
              {text && <p className="text-center">Description: {text}</p>}
              <button className={buttonStyle} onClick={handleEditToggle}>
                Edit
              </button>
              <button className={buttonStyle} onClick={deleteTodo}>
                Delete
              </button>
            </div>
          )}
        </div>
      )}
      {toggleEdit && (
        <div className="grid grid-flow-row">
          <label className="text-center">Title</label>
          <input
          className="rounded-lg border-2 border-gray-300"
            type="text"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          ></input>
          <label className="text-center">Description:</label>
          <textarea
          className="rounded-lg border-2 border-gray-300"
            value={todo.text}
            onChange={(e) => setTodo({ ...todo, text: e.target.value })}
          ></textarea>
          <button className={buttonStyle} onClick={handleSaveEdit}>
            Save Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default ToDo;
