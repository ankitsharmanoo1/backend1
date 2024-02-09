// require('dotenv').config({path: './.env'})
import dotenv from "dotenv";
// import mongoose, { connect } from "mongoose";
// import MyDatabase from "./Constants";
import connectDB from "./db/index.js";

 
dotenv.config({
    path: './env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at Port : ${process.env.PORT}`);
    })
})

.catch((err)=>{
    console.log("MongoDb connection failed", err
    );
})




























// import express from "express";

// const app = express()



// ;(async ()=>{
//        try{
//             await   mongoose.connect(`${process.env.MONGODB_URI}/${MyDatabase}`)
//             app.on("error", (error) =>{
//                   console.log("application is not able to talk with database", error);
//                    throw error
//             })


//             app.listen(process.env.PORT,()=>{
//                   console.log(`App is listning on port ${process.env.PORT}`);
//             })
//        }
//        catch(error)
//        {
//         console.log("ERROR",error);
//         throw err
//        }
// })
// ()