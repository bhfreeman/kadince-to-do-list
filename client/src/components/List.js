import React, { useState, useEffect } from "react";

import AddNewTodo from "./AddNewTodo";
import ToDo from "./ToDo";
import ListFilter from "./ListFilter";

function List({ title, todos, list_id, setLists }) {
  const [filteredList, setFilteredList] = useState([]);
  const [pendingList, setPendingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  useEffect(() => {
    setFilteredList(todos);
    setPendingList(todos.filter((todo) => todo.isComplete === false));
    setCompletedList(todos.filter((todo) => todo.isComplete === true));
  }, [todos]);

  return (
    <div className="flex flex-col items-center border-black border-2 rounded-xl m-5 md:max-w-md w-72 shadow-xl ">
      <div className="grid grid-flow-col w-full pt-2 mb-2 bg-purple-200 rounded-t-lg">
        <h1 className="text-2xl text-center font-bold justify-self-start pl-3">
          {title}
        </h1>
        <div className="justify-self-end grid grid-flow-col relative pr-3">
          <AddNewTodo list_id={list_id} setLists={setLists} />
          <ListFilter
            setFilteredList={setFilteredList}
            pendingList={pendingList}
            completedList={completedList}
            todos={todos}
          />
        </div>
      </div>
      {/* filter the list */}
      {filteredList.length > 0 &&
        filteredList.map((todo) => (
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
      {filteredList.length === 0 && (
        <div>
          <p>No to-do's to display for this list!</p>
        </div>
      )}
    </div>
  );
}

export default List;
