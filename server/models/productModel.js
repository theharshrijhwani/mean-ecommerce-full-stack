import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    shortDescription: String,
    purchasePrice: Number,
    sellingPrice: Number,
    images: Array(String),
    categoryId: { type: Schema.Types.ObjectId, ref: 'category' }
});

const Product = mongoose.model("product", productSchema);

export default Product;