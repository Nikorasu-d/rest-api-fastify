//Imports
import mongoose from "mongoose";
import { CON_STR, DB } from "./env.js";

//MongoDB Connection String
const mongoDB = `${CON_STR}/${DB}`

//Open Connection
export const open = async () =>{
    await mongoose.connect(mongoDB).then((result) =>
        console.log(`Connected to Database ${result}`)
    ).catch((error) =>
        console.log(error)
    )
}

//Close Connection
export const close = async () =>{
    await mongoose.connection.close().then(() => {
        console.log("Connection close")
    }).catch((error)=>
        console.log(error)
    )

}
