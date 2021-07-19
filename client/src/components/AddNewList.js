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
            {!toggleCreate && <button className="font-bold ml-10" onClick={()=> setToggleCreate(!toggleCreate)}>Add New List</button>}
            <div className={toggleCreate ? "w-64 h-24 ml-10 border-2 border-black rounded-xl" : "hidden"} >
                <label className="font-bold" htmlFor="title">List Title: </label>
                <input className="font-semibold max-w-full" type="text" placeholder="To-Do List Title" onChange={(e)=> setTitle(e.target.value)}></input>
                <button className="bg-purple-400 rounded-md m-1 p-1 min-w-24" onClick={handleListCreate} >Create List</button>
            </div>
        </div>
    )
}

export default AddNewList
