import mongoose from 'mongoose';
import dotenv from "dotenv"

const Connection = async () => {
    try {   
        dotenv.config();
        // const URL = process.env.URI;
        
        await mongoose.connect("mongodb+srv://titasnath:shyamnagar1@resume-project-3.tp9mu.mongodb.net/resume-project-3?retryWrites=true&w=majority", { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;