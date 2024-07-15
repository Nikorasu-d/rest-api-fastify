// Imports
import { getAllTodos, getTodo, postTodo, putTodo, deleteTodo } from '../../controller/todoController.js'

//  Define and export routes
export const routes = async (app, options) =>{
    app.get("/todos/all", getAllTodos)
    app.get("/todos/:id", getTodo)
    app.post("/todos", postTodo)
    app.put("/todos",putTodo)
    app.delete("/todos/:id", deleteTodo)
}