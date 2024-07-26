// Imports
import { getAllTodos, getTodo, postTodo, putTodo, deleteTodo } from '../../controller/todoController.js'

//  Define and export routes
export const routes = async (app, options) =>{
    //GetAll Route
    app.get("/todos/all", getAllTodos)
    //Get Route
    app.get("/todos/:id", getTodo)
    //Post Route
    app.post("/todos", postTodo)
    //Put Route
    app.put("/todos/:id",putTodo)
    //Delete Route
    app.delete("/todos/:id", deleteTodo)
}