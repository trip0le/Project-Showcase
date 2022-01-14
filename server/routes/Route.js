// import express from "express";
// const router = express.Router();
// import Queries from "../model/news.js";

// import { getNews } from "../controller/news-controller.js";

// // route.get('/', getNews);

// router.route("/").get((req, res) => {
//   Queries.find()
//     .then((news) => res.json(news))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// export default router;



import express from 'express';

import { getNews } from '../controller/news-controller.js';

const route = express.Router();


route.get('/', getNews);


export default route;