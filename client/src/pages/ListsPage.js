import React, {useState, useEffect} from 'react'

import List from '../components/List'

function ListsPage() {

    const [lists, setLists] = useState()
    


    return (
        <>
        {lists.map(list => {
            return <List
            todos={list.todos} />
        })}
        </>
    )
}

export default ListsPage
