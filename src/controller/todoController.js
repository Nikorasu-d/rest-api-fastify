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

//GET All Controller
export const getAllTodos = (request, reply) => {
    getAllTodosService().then((result) =>
        reply.status(result.message).send(result)
    ).catch((error) => 
        reply.status(error.statusCode).send(error)
    )
}

//GET Controller
export const getTodo = (request, reply) => {
    getTodoService(request.params.id).then((result) =>
        reply.status(result.message).send(result)
    ).catch((error) => {
        reply.status(error.statusCode).send(error)
    })
}

//POST Controller
export const postTodo = (request, reply) => {
    
    //Throws Error when Missing or Invalid API Key
    if(!validateApiKey(request.headers["x-api-key"])){
        const error = new Error('API key is Missing or Invalid')
        error.statusCode = 401
        throw error
    }
    
    //Post Service
    postTodoService(request.body).then((result) =>{
        reply.status(result.message).send(result)
    }).catch((error) => {
        //Check Error and Send to Handler
        reply.status(error.statusCode).send(error) 
    })

}

// PUT Controller
export const putTodo = (request, reply) => {

    //Throws Error when Missing or Invalid API Key
    if(!validateApiKey(request.headers["x-api-key"])){
        const error = new Error('API key is Missing or Invalid')
        error.statusCode = 401
        throw error
    }

    //Put Service
    putTodoService(request.params.id,request.body).then((result) =>{
        reply.status(result.message).send(result)
    }).catch((error) => 
        reply.status(error.statusCode).send(error)
    )
    

}

//DELETE Controller
export const deleteTodo = (request, reply) => {

    //Throws Error when Missing or Invalid API Key
    if(!validateApiKey(request.headers["x-api-key"])){
        const error = new Error('API key is Missing or Invalid')
        error.statusCode = 401
        throw error
    }

    //Delete Service
    deleteTodoService(request.params.id).then((result) =>{
        reply.status(result.message).send(result)
    }).catch((error) => {
        reply.status(error.statusCode).send(error)
    })
}