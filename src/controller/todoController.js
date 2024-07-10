const todoService = require("../services/todoService")
const dotenv = require('dotenv').config()

const validateApiKey = (incomingKey) => incomingKey === process.env.API_KEY




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
    validateApiKey(request.headers["x-api-key"]) ? 
    todoService.postTodo(request.body).then((result) =>{
        reply.status(result.message).send({
            message : result.message,
            value : result.value})
    }).catch(() => 
        reply.status(500).send({
            message:500,
            value : {}
        })
    ) 
    : 
    reply.status(401).send({
            message: 401,
            value : "Not valid API Key or Not Found, check your Headers"
        })
}
const putTodo = (request, reply) => {
    const{id} = request.params
    reply.send(`putTodo ${id}`)
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