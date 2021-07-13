import React, {useState} from 'react'

function ToDo({title, text, isComplete, id}) {

    function deleteTodo() {

    }

    function editTodo() {

    }

    function handleComplete() {

    }
    


    return (
        <>
            <h1>{title}</h1>
            <p>{text}</p>
            <button>Edit</button>
            <button>Delete</button>
            <input type='checkbox' />
            {/* todo text */}
            {/* todo title? */}
            {/* edit and delete buttons */}
            {/* complete todo toggle */}
        </>
    )
}

export default ToDo
