import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Api is up and running!");
})

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
})