import React, { useState, useEffect } from "react";
import API from "../utils/API";

import List from "../components/List";
import AddNewList from "../components/AddNewList";

function ListsPage() {
  const [lists, setLists] = useState([]);

  const getLists = async () => {
    try {
      let response = await API.getLists();
      await setLists(response.data);
    } catch (error) {
      return console.error(error);
    }
  };

  useEffect(() => {
    getLists();
  }, []);

  return (<>
  <AddNewList lists={lists} setLists={setLists} />
    {lists.length > 0 && <div className="flex flex-col md:flex-row">
      {lists.map((list) => (
        <List
          key={list.id}
          id={list.id}
          title={list.title}
          todos={list.todos}
        />
      ))}
    </div>}
    {lists.length === 0 && <div>
        <h1>You Have no lists to display, add a new list and start tracking to-dos!</h1>
        </div>}
    </>)
}

export default ListsPage;
