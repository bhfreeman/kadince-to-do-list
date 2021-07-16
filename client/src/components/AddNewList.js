import React, {useState} from 'react'
import API from '../utils/API'

function AddNewList({lists, setLists}) {
    const [toggleCreate, setToggleCreate] = useState(false)
    const [title, setTitle] = useState();

    async function handleListCreate() {
        setToggleCreate(!toggleCreate)
        await API.createList({title: title})
        const response = await API.getLists();
        setLists(response.data)
    }

    return (
        <div>
            {!toggleCreate && <button onClick={()=> setToggleCreate(!toggleCreate)}>Add New List</button>}
            <div className={toggleCreate ? "w-40 h-24 border-2" : "hidden"} >
                <label htmlFor="title">List Title: </label>
                <input type="text" placeholder="ToDo List Title" onChange={(e)=> setTitle(e.target.value)}></input>
                <button onClick={handleListCreate} >Create List</button>
            </div>
        </div>
    )
}

export default AddNewList
