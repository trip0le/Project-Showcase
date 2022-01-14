import axios from 'axios';
import dotenv from "dotenv";

dotenv.config();
// const PORT = process.env.PORT || 8000;

const PORT = process.env.PORT || 8000;

// const URL = `http://localhost:${PORT}/news`;

const URL = `https://project-showcase-backend.herokuapp.com/news`;


export const getNews = async (page, size = 2) => {
    try {
        return await axios.get(`${URL}?page=${page}&size=${size}`);
    } catch (error) {
        console.log('error while calling getNews API');
    }
}