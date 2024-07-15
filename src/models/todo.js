// Imports
import { Schema, model } from "mongoose";
import { COLLECTION } from "../config/env.js";

//Define Schema
const todoSchema = new Schema({
    title:{type: String, required: true, default: ""},
    completed:{type : Boolean, default : false}
},{
    timestamps : true, collection : COLLECTION 
})

//Exports Model
export default model('todo', todoSchema)