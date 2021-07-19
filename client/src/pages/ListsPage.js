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

  return (
    <div className="min-h-screen">
      <header className="my-10">
        <h1 className="font-black text-6xl text-center">To-Do Lists</h1>
        <p className="text-center">
          Get organized. Create a list and add to-do's to that list.
        </p>
      </header>
        <AddNewList lists={lists} setLists={setLists} />
      <div className="flex flex-wrap ">
        {lists.length > 0 && (
          <div className="flex flex-col md:flex-row">
            {lists.map((list) => (
              <List
                key={list.id}
                list_id={list.id}
                title={list.title}
                todos={list.todos}
                setLists={setLists}
              />
            ))}
          </div>
        )}
        {lists.length === 0 && (
          <div>
            <h1>
              You Have no lists to display, add a new list and start tracking
              to-dos!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListsPage;
