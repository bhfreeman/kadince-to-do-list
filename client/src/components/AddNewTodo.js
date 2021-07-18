import React, { useState } from "react";

import API from '../utils/API'

function AddNewTodo({list_id, setLists}) {
  const [isActive, setIsActive] = useState(false);
  const [newTodo, setNewTodo] = useState({
      title: '',
      text: '',
      list_id: list_id
  })

  async function handleSubmit(){
      console.log(newTodo)
      if(newTodo.title !== '' && newTodo.text !== ''){
          setIsActive(!isActive)
          await API.createTodo({title: newTodo.title, text: newTodo.text, list_id: list_id})
          const response = await API.getLists();
        setLists(response.data)
      }
      else window.alert("Both the title and description are needed to create a new to-do!")
  }

//   function toggleAddNew() {
//       setIsActive(!isActive)
//   }
  return (
    <>
        <svg
        onClick={()=> setIsActive(!isActive)}
          className="w-6 h-6 cursor-pointer justify-self-end"
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
      <div className={isActive ? "block" : "hidden"}>
          <label htmlFor="title" >Title</label>
          <input id="title" type="text" onChange={(e) => setNewTodo({...newTodo, title: e.target.value})} />
          <label htmlFor="description_text">Description</label>
        <textarea id="description_text" onChange={(e) => setNewTodo({...newTodo, text: e.target.value})}></textarea>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default AddNewTodo;
