import React, { useState, useEffect } from "react";

import AddNewTodo from "./AddNewTodo";
import ToDo from "./ToDo";
import ListFilter from "./ListFilter";

function List({ title, todos, list_id, setLists }) {

    const [filteredList, setFilteredList] = useState([])
    const [pendingList, setPendingList] = useState([])
    const [completedList, setCompletedList] = useState([])

    useEffect(()=>{
         setFilteredList(todos)
         setPendingList(todos.filter(todo => todo.isComplete === false))
         setCompletedList(todos.filter(todo => todo.isComplete === true))
        },[todos])

  return (
    <div className="flex flex-col items-center border-black border-2 m-5 p-2 md:max-w-md">
      <h1 className="text-2xl text-center font-bold">{title}</h1>
      <AddNewTodo list_id={list_id} setLists={setLists} />
      <ListFilter setFilteredList={setFilteredList} pendingList={pendingList} completedList={completedList} todos={todos} />
      {/* filter the list */}
      {filteredList.length > 0 && filteredList.map((todo) => (
        <ToDo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          text={todo.text}
          isComplete={todo.isComplete}
          setLists={setLists}
          list_id={list_id}
        />
      ))}
    </div>
  );
}

export default List;
