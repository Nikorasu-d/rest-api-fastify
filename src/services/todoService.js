// Imports
import Todo from '../models/todo.js'
import { open, close } from '../config/database.js';


//GET All Service
export const getAllTodos = async () => {
    //Try Query
    try {
        await open()
        const docs = await Todo.find() 
        return {message: 200 , value : docs}
    } catch (error) {
        throw error
    }finally{
        await close()
    }
}

//GET Service
export const getTodo = async (id) => {
    //Validates Incoming Data
    if(id === ''){
        const error = new Error()
        error.statusCode = 400
        error.message = 'Missing id'
        throw error
    }

    //Try Query
    try {
        console.log(`Finding ${id}`)
        await open()
        const doc = await Todo.findById(id)
        return doc === null  ?  
        {message: 404 , value : "Object ID not Found"} 
        : 
        {message: 200 , value : doc}
    } catch (error) {
        if(error.name === 'CastError') {
            error.statusCode = 400
            error.message = `${id} is not a valid ID for ObjectID`
        }
        throw error
    }finally{
        await close()
    }
}

//POST Service
export const postTodo = async(document) => {
    //Try Query
    try {

        console.log(`Posting ${JSON.stringify(document)}`)
        await open()
        const doc = await Todo.create(document)
        console.log(doc)
        return {message: 200 , value : doc._id}

    } catch (error) {
        if (error.name === 'ValidationError') {
            error.statusCode = 400
        }
        throw error
    }finally{
        await close()
    }
}

//PUT Service
export const putTodo = async (id, document) => {
    //Validates Incoming Data
    if(id === ''){
        const error = new Error()
        error.statusCode = 400
        error.message = 'Missing id'
        throw error
    }

    if(Object.keys(document).length === 0){
        const error = new Error()
        error.statusCode = 400
        error.message = 'Please verify your incoming JSON'
        throw error
    }

    //Try Query
    try {
        console.log(`Updating ${JSON.stringify(document)}`)
        await open()
        const doc = await Todo.updateOne({_id : id}, document)
        return doc.matchedCount === 0 ? 
        { message: 404, value: "Object ID not Found" } 
        : 
        await getTodo(id)
    } catch (error) {
        if(error.name === 'CastError') {
            error.statusCode = 400
            error.message = `${id} is not a valid ID for ObjectID`
        }else if (error.name === 'ValidationError') {
            error.statusCode = 400
        }
        throw error;
    }finally{
        await close()
    }
};

//DELETE Service
export const deleteTodo = async (id) => {
    //Validates Incoming Data
    if(id === ''){
        const error = new Error()
        error.statusCode = 400
        error.message = 'Missing id'
        throw error
    }

    try {
        console.log(`Deleting ${id}`)
        await open()
        const doc = await Todo.deleteOne({_id : id})
        console.log(doc)
        return doc.deletedCount === 0 ?
        {message: 404 , value : 'Object ID not Found'}
        :
        {message: 200 , value : `Deleted ID: ${id}`}
    } catch (error) {
        throw error
    }finally{
        await close()
    }
}