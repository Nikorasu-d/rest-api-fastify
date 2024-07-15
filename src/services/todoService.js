// Imports
import Todo from '../models/todo.js'
import { open, close } from '../config/database.js';


// Declare and Export Functions
export const getAllTodos = async () => {
    try {
        await open()
        const docs = await Todo.find() 
        return {message: 200 , value : docs}
    } catch (error) {
        return error
    }finally{
        await close()
    }
}
export const getTodo = async (id) => {
    try {
        console.log(`Finding ${id}`)
        await open()
        const doc = await Todo.findById(id)
        return doc === null  ?  
        {message: 404 , value : {} } 
        : 
        {message: 200 , value : doc}
    } catch (error) {
        return error
    }finally{
        await close()
    }
} 
export const postTodo = async(document) => {
    try {
        console.log(`Posting ${JSON.stringify(document)}`)
        await open()
        const doc = await Todo.create(document)
        console.log(doc)
        return {message: 200 , value : doc._id}
    } catch (error) {
        return error
    }finally{
        await close()
    }
}
export const putTodo = async (document) => {
    try {
        console.log(`Updating ${JSON.stringify(document)}`)
        await open()
        const doc = await Todo.updateOne({_id : document._id}, document)
        return doc.matchedCount === 0 ? 
        { message: 404, value: {} } 
        : 
        { message: 200, value: doc }
    } catch (error) {
        console.error("Error updating document:", error)
        return { message: 500, value: error }
    } finally {
        console.log("Closing Connection to db")
        await close()
    }
}
export const deleteTodo = async (id) => {
    try {
        console.log(`Deleting ${id}`)
        await open()
        const doc = await Todo.deleteOne({_id : id})
        return doc.deletedCount === 0 ?
        {message : 404 , value: {}}
        : 
        {message : 200 , value: doc}

    } catch (error) {
        return error
    }finally{
        client.close()
    }
}