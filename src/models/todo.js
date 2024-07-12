
const Schema = (document) => {
    const Schema = {}

    document.hasOwnProperty("title") && typeof(document.title) === "string" ? Schema["title"] = document.title : null 
    document.hasOwnProperty("completed") && typeof(document.completed) === "boolean" ? Schema["completed"] = document.completed : null
    
    return Schema
}

module.exports = {
    Schema
}