import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import {getNews} from "./controller/news-controller.js"
// import path from "path";

//components
import Connection from "./connection/db.js";
import Route from "./routes/Route.js";
// import DefaultData from "./default.js";

Connection();

const app = express();
app.use(cors({
  origin: '*'
}));
dotenv.config();

//Use Routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use("/news", Route);

//Serve static assets if in production
// if (process.env.NODE_ENV === "production") {
  //Set Static folder
  // app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const PORT = process.env.PORT || 8000;


app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);

// DefaultData();
