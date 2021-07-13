import React, {useState, useEffect} from 'react'

import AddNewTodo from './AddNewTodo'
import ToDo from './ToDo'

function List({todos}) {

    return (
        <>
        <AddNewTodo />
        {todos.map((todo) => {
          return  <ToDo
          id={todo.id}
          title={todo.title}
          text={todo.text}
          isComplete={todo.isComplete}
          />
        })}
        </>
    )
}

export default List
