import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from "cors";

import categoryRouter from "./routes/category.js"
import brandRouter from "./routes/brand.js"
import productRouter from "./routes/product.js"

const app = express();
const port = 8080;

dotenv.config()

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello world!")
})

app.use("/category", categoryRouter);
app.use("/brand", brandRouter);
app.use("/product", productRouter);


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