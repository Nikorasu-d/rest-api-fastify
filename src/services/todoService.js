const { MongoClient, ObjectId} = require('mongodb');
const Todo = require("../models/todo")


const {CON_STR : url , DB : database, COLLECTION : collection,} = process.env

const client = new MongoClient(url)
const queryCollection = client.db(database).collection(collection)


const getAllTodos = async () => {
    //Ejecuta la query
    try {
        await client.connect(url)
        const result = await queryCollection.find().toArray()
        const docs = await Promise.all(result.map(async doc => doc))
        return {message: 200 , value : docs}
    } catch (error) {
        return error
    }finally{
        client.close()
    }
}

const getTodo = async (id) => {
    //Ejecuta la query
    try {
        await client.connect()
        const result = await queryCollection.findOne({ "_id" : new ObjectId(id)})
        return result === null  ?  
        {message: 404 , value : {} } 
        : 
        {message: 200 , value : result}
    } catch (error) {
        return error
    }finally{
        client.close()
    }
}
    
const postTodo = async(document) => {
    //Valida que el json en body contenga los parametros title y completed para ser inicializados
    if(Object.keys(Todo.Schema(document)).length !== 2){
        return {message: 400 , value : {}}
    }
    
    //Ejecuta la Query
    try {
        await client.connect()
        const result = await queryCollection.insertOne(Todo.Schema(document))
        return {message: 200 , value : result.insertedId}
    } catch (error) {
        return error
    }finally{
        client.close()
    }
}

const putTodo = async (document) => {
    //Valida que se haya ingresado la propiedad _id
    if (!document.hasOwnProperty("_id")) {
        return { message: 400, value: "Invalid or Missing _id property" }
    }

    //Ejecuta la query
    try {
        await client.connect(url)
        const result = await queryCollection.updateOne(
            { "_id": new ObjectId(document._id)},
            { $set: Todo.Schema(document)},
            {upsert : false}
        )
        return result.matchedCount === 0 ? 
        { message: 404, value: {} } 
        : 
        { message: 200, value: result }
    } catch (error) {
        console.error("Error updating document:", error)
        return { message: 500, value: error }
    } finally {
        console.log("Closing Connection to db")
        await client.close()
    }
}

const deleteTodo = async (id) => {
    //Valida que exista el id en params
    if (id === "") {
        return { message: 400, value: "Invalid or Missing _id property" }
    }

    //Ejecuta la query
    try {   
        await client.connect(url)
        const result = await queryCollection.deleteOne({ "_id": new ObjectId(id)})
        
        return result.deletedCount === 0 ?
        {message : 404 , value: {}}
        : 
        {message : 200 , value: result}

    } catch (error) {
        return error
    }finally{
        client.close()
    }
}

module.exports = {
    getAllTodos,
    getTodo,
    postTodo,
    putTodo,
    deleteTodo
}
