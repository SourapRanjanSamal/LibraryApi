import mongoose from "mongoose";

const connectDB = async () => {
    const DB_URL = process.env.MONGO_URI;
    try{
       await mongoose.connect(DB_URL);
       console.log("Database Connection Succeded");
    }
    catch(error){
        console.log("Error in connecting To DB ",error.message);
    }
}

export {connectDB};