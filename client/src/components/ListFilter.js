import React, {useState} from 'react'

function ListFilter({setFilteredList, todos, pendingList, completedList}) {

    const buttonStyle = "bg-purple-400 rounded-md m-1 p-1 min-w-24";
    const [toggleFilter, setToggleFilter] = useState(false)

    return (
        <>
            <svg onClick={()=> setToggleFilter(!toggleFilter)} className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
            {toggleFilter && <div className="absolute mt-6 z-10 bg-white grid grid-flow-row right-0">
            <button className={buttonStyle} onClick={()=> setFilteredList(todos)}>Show All</button>
            <button className={buttonStyle} onClick={()=> setFilteredList(pendingList)}>Show Pending</button>
            <button className={buttonStyle} onClick={()=> setFilteredList(completedList)}>Show Completed</button>
            </div>}
        </>
    )
}

export default ListFilter
