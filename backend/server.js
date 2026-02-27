import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const PORT = process.env.PORT
const app = express();

app.use(cors({
    origin: process.env.FRONT_END_URL,
    credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Api is up and running!");
})


app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
})