import React, { useState } from "react";

function AddNewTodo() {
  const [isActive, setIsActive] = useState(false);
  const [newTodo, setNewTodo] = useState({
      title: '',
      text: ''
  })

  function handleSubmit(){

  }

  function toggleAddNew() {
      setIsActive(!isActive)
  }
  return (
    <>
      <button onClick={toggleAddNew}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <div className={isActive ? "block" : "hidden"}>
          <label htmlFor="title" >Title</label>
          <input id="title" type="text" />
          <label htmlFor="description_text">Description</label>
        <textarea id="description_text"></textarea>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default AddNewTodo;
