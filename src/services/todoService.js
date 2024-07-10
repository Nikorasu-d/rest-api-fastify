const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require("dotenv")
dotenv.config()

const url = process.env.CON_STR
const client = new MongoClient(url)

const validateJSON= (document) =>{
    console.log(`Validating: ${JSON.stringify(document)}`)    
    let count = 0
    const keys = Object.keys(document)

    return (keys.length === 2 && document.hasOwnProperty("title") && document.hasOwnProperty("completed"))
}

const getAllTodos = async () => {
    try {
        await client.connect()
        const result = await client.db('todo_list').collection('todos').find().toArray()
        const docs = await Promise.all(result.map(async doc => doc))
        return {message: 200 , value : docs}
    } catch (error) {
        return error
    }finally{
        console.log("Closing Connection to db")
        client.close()
    }
}

const getTodo = async (id) => {
    try {
        console.log(`searching for ${id}`)
        await client.connect()
        const result = await client.db('todo_list').collection('todos').findOne({ "_id" : new ObjectId(id)})
        return result === null  ?  {message: 404 , value : {} } : {message: 200 , value : result}
    } catch (error) {
        return error
    }finally{
        console.log("Closing Connection to db")
        client.close()
    }
}
    
const postTodo = async(document) => {
    if(validateJSON(document)){
        try {
            console.log(`Posting: ${JSON.stringify(document)}`)
            await client.connect()
            const result = await client.db('todo_list').collection('todos').insertOne(document)
            return {message: 200 , value : result.insertedId}
        } catch (error) {
            return error
        }finally{
            console.log("Closing Connection to db")
            client.close()
        }
    }else{
        return {message: 400 , value : {}}
    }
    
   
}
const putTodo = async (request  , reply) => {
    return
}
const deleteTodo = async (request , reply) => {
    return 
}

module.exports = {
    getAllTodos,
    getTodo,
    postTodo,
    putTodo,
    deleteTodo
}
