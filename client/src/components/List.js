import React, {useState, useEffect} from 'react'

import AddNewTodo from './AddNewTodo'
import ToDo from './ToDo'

function List({title, todos}) {

    return (
        <>
        <h1>{title}</h1>
        <AddNewTodo />
        {/* filter the list */}
        {todos.map(todo => <ToDo key={todo.id} id={todo.id} title={todo.title} text={todo.text} isComplete={todo.isComplete} />)}
        </>
    )
}

export default List
