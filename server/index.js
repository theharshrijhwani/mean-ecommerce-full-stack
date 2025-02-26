import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"

const app = express();
const port = 8080;

dotenv.config()

app.get("/", (req, res) => {
    res.send("hello world!")
})

async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("db connected")
}

connectDB().catch((err) => {
    console.log(err);
})

app.listen(port, () => {
    console.log(`server running on ${port}`);
})