import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";
import dotenv from "dotenv";
import { register } from "./controllers/userController.js";

const app = express();

dotenv.config();

app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(morgan('dev'));
app.use(express.json());


app.post("/register", register);
app.use("/abhishek/static", router);

mongoose.connect("mongodb+srv://abhishek:Glorious%40Mongo41@atlascluster.htagarr.mongodb.net/staticRenderDB?retryWrites=true&w=majority")
.then(() => console.log("DB Connection Established."))
.catch((err) => console.log("DB Error",err));

app.listen(8000);