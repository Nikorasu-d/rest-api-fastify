const { getAllTodos, getTodo, postTodo, putTodo, deleteTodo } = require("../../controller/todoController")

const routes = async (app, options) =>{
    app.get("/todos/all", getAllTodos)
    app.get("/todos/:id", getTodo)
    app.post("/todos", postTodo)
    app.put("/todos",putTodo)
    app.delete("/todos/:id", deleteTodo)
}

module.exports = routes