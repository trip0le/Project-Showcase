import mongoose from 'mongoose';
import dotenv from "dotenv"

const Connection = async () => {
    try {   
        dotenv.config();
        // const URL = process.env.URI;
        
        await mongoose.connect("YOUR_MONGODB_URL", { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;
