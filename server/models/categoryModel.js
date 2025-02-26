import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: string
});

const Category = mongoose.model("category", categorySchema);

export default Category;