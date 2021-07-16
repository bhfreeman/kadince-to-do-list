import axios from "axios";

const API = {
    getLists: function() {
      return axios.get("/api/list/all");
    },
    createList: function(list_title) {
        return axios.post("/api/list", list_title)
    },
    deleteList: function(id) {
        return axios.delete(`/api/list/${id}`)
    },
    createTodo: function(new_todo) {
        return axios.post('/api/todo', new_todo)
    },
    getTodos: function() {
        return axios.get('/api/todo/all')
    },
    updateTodo: function(todo) {
        return axios.put(`/api/todo/${todo.id}`, todo)
    },
    deleteTodo: function(id) {
        return axios.delete(`/api/todo/${id}`)
    },
    completeTodo: function(id) {
        return axios.put( `/api/todo/complete/${id}`)
    },
    undoComplete: function(id) {
        return axios.put( `/api/todo/undo/${id}`)
    }
  };

  export default API;