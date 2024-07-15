import mongoose from "mongoose";
import { CON_STR, DB } from "./env.js";

const mongoDB = `${CON_STR}/${DB}`

export const open = async () =>{
    await mongoose.connect(mongoDB).then((result) =>
        console.log(`Connected to Database ${result}`)
    ).catch((error) =>
        console.log(error)
    )
}

export const close = async () =>{
    await mongoose.connection.close().then(() => {
        console.log("Connection close")
    }).catch((error)=>
        console.log(error)
    )

}
