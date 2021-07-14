import React, {useState, useEffect} from 'react'
import API from "../utils/API";

import List from '../components/List'

function ListsPage() {

    const [lists, setLists] = useState([])

    const getLists = async () => {
        try {
            let response = await API.getLists();
            await setLists(response.data);
          } catch (error) {
            return console.error(error);
          }
    }

    useEffect(() => {
        getLists();
    },[])


    return (
        <>
        {lists.map(list => <List key={list.id} id={list.id} title={list.title} todos={list.todos} />)}
        </>
    )
}

export default ListsPage
