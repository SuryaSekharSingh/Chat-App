import mongoose from 'mongoose';

const connectMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, {
            dbName: "chat-app-db"
        });
        console.log("Connected to mongoDB");
    
    } catch (error) {
        console.log("Error connecting : ", error.message);
    }
}

export default connectMongoDB