import mongoose from "mongoose";
import {DB_NAME} from "../Constants.js";


const connectDB = async () =>{
     try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n The Databse is Connected Sucessfully with MongoDb ! DB Host : ${connectionInstance.connection.host}`);
     }
     catch (error){
        console.log("MongoDb Connection failed ",error);
        process.exit(1)
     }
}


export default connectDB

