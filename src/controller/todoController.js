const todoService = require("../services/todoService")

const getAllTodos = (request, reply) => {
    todoService.getAllTodos().then((result) =>
        reply.status(200).send({
            message : result.message,
            value : result.value})
    ).catch(() => 
        reply.status(500).send({
            message:500,
            value : {}
        })
    )
}
const getTodo = (request, reply) => {
    todoService.getTodo(request.params.id).then((result) =>
        reply.status(result.message).send({
            message : result.message,
            value : result.value})
    ).catch(() => 
        reply.status(500).send({
            message:500,
            value : {}
        })
    )
}
const postTodo = (request, reply) => {
    todoService.postTodo(request.body).then((result) =>
        reply.status(result.message).send({
            message : result.message,
            value : result.value})
    ).catch(() => 
        reply.status(500).send({
            message:500,
            value : {}
        })
    )
}
const putTodo = (request, reply) => {
    reply.send("putTodo")
}
const deleteTodo = (request, reply) => {
    const{id} = request.params
    reply.send(`deleteTodo ${id}`)
}

module.exports = {
    getAllTodos,
    getTodo,
    postTodo,
    putTodo,
    deleteTodo
}