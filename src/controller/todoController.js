// Imports
import {
    getAllTodos as getAllTodosService,
    getTodo as getTodoService,
    postTodo as postTodoService,
    putTodo as putTodoService,
    deleteTodo as deleteTodoService
} from "../services/todoService.js"
import { API_KEY } from "../config/env.js"

//Validate incoming API KEY
const validateApiKey = (incomingKey) => incomingKey === API_KEY


//Declare and Export Functions
export const getAllTodos = (request, reply) => {
    getAllTodosService().then((result) =>
        reply.status(200).send({
            message : result.message,
            value : result.value})
    ).catch((error) => 
        reply.status(500).send({
            message:500,
            value : error
        })
    )
}
export const getTodo = (request, reply) => {
    getTodoService(request.params.id).then((result) =>
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
export const postTodo = (request, reply) => {
    validateApiKey(request.headers["x-api-key"]) ? 
    postTodoService(request.body).then((result) =>{
        reply.status(result.message).send({
            message : result.message,
            value : result.value})
    }).catch((error) => 
        reply.status(500).send({
            message:500,
            value : error
        })
    ) 
    : 
    reply.status(401).send({
            message: 401,
            value : "Not valid API Key or Missing, header must include x-api-key"
        })
}
export const putTodo = (request, reply) => {
    validateApiKey(request.headers["x-api-key"]) ? 
    putTodoService(request.body).then((result) =>{
        reply.status(result.message).send({
            message : result.message,
            value : result.value})
    }).catch((error) => 
        reply.status(500).send({
            message:500,
            value : error
        })
    )
    :
    reply.status(401).send({
        message: 401,
        value : "Not valid API Key or Missing, header must include x-api-key"
    })
}
export const deleteTodo = (request, reply) => {
    validateApiKey(request.headers["x-api-key"]) ? 
    deleteTodoService(request.params.id).then((result) =>{
        reply.status(result.message).send({
            message : result.message,
            value : result.value})
    }).catch((error) => 
        reply.status(500).send({
            message:500,
            value : error
        })
    )
    :
    reply.status(401).send({
        message: 401,
        value : "Not valid API Key or Missing, header must include x-api-key"
    })
}