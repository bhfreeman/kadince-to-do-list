import React from 'react'

function ListFilter({setFilteredList, todos, pendingList, completedList}) {

    const buttonStyle = "bg-purple-400 rounded-md m-1 p-1 min-w-24";

    return (
        <div>
            <button className={buttonStyle} onClick={()=> setFilteredList(todos)}>Show All</button>
            <button className={buttonStyle} onClick={()=> setFilteredList(pendingList)}>Show Pending</button>
            <button className={buttonStyle} onClick={()=> setFilteredList(completedList)}>Show Completed</button>
        </div>
    )
}

export default ListFilter
