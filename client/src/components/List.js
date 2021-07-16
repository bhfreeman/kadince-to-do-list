import React, { useState, useEffect } from "react";

import AddNewTodo from "./AddNewTodo";
import ToDo from "./ToDo";

function List({ title, todos }) {
  return (
    <div className="flex flex-col items-center border-black border-2 m-5 p-2 md:max-w-md">
      <h1 className="text-2xl text-center font-bold">{title}</h1>
      <AddNewTodo />
      {/* filter the list */}
      {todos.map((todo) => (
        <ToDo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          text={todo.text}
          isComplete={todo.isComplete}
        />
      ))}
    </div>
  );
}

export default List;
