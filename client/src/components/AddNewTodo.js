import React, {useState} from 'react'

function AddNewTodo() {

    const [isActive, setIsActive] = useState(false)
    return (
        <>
            <button>Add New To-Do</button>
            <div className={isActive ?  "block" : "hidden"}>
                <textarea></textarea>
            </div>
        </>
    )
}

export default AddNewTodo
