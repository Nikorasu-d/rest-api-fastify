//In the future this will be a Mongoose model

const Schema = (document) => {
    const Schema = {}
    if(document.hasOwnProperty("title") && typeof(document.title) === "string" ){
        Schema["title"] = document.title
    }

    if(document.hasOwnProperty("completed") && typeof(document.completed) === "boolean"){
        Schema["completed"] = document.completed
    }
    
    return Schema
}

module.exports = {
    Schema
}