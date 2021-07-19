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
        setNewTodo({title:'',text: '', list_id: list_id})
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
      <div className={isActive ? "absolute mt-6 z-10 bg-white border-2 border-black  grid grid-flow-row right-0" : "hidden"}>
          <label className="text-center" htmlFor="title" >Title</label>
          <input className="rounded-lg border-2 border-gray-300" id="title" type="text" value={newTodo.title} onChange={(e) => setNewTodo({...newTodo, title: e.target.value})} />
          <label className="text-center" htmlFor="description_text">Description</label>
        <textarea className="rounded-lg border-2 border-gray-300" id="description_text" value={newTodo.text} onChange={(e) => setNewTodo({...newTodo, text: e.target.value})}></textarea>
        <button className="bg-purple-400 rounded-md m-1 p-1 min-w-24" onClick={handleSubmit}>Submit New To-Do</button>
      </div>
    </>
  );
}

export default AddNewTodo;
