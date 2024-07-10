const { getAllTodos, getTodo, postTodo, putTodo, deleteTodo } = require("../../controller/todoController")

const routes = async (fastify, options) =>{

    fastify.get("/todos/all", getAllTodos)

    fastify.get("/todos/:id", getTodo)

    fastify.post("/todos", postTodo)

    fastify.put("/todos",putTodo)

    fastify.delete("/todos/:id", deleteTodo)
}
    
    


module.exports = routes