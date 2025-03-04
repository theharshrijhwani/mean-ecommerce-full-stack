import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    shortDescription: String,
    price: Number,
    discount: Number,
    images: Array(String),
    categoryId: { type: Schema.Types.ObjectId, ref: "category" },
    brandId: { type: Schema.Types.ObjectId, ref: "brand" }
});

const Product = mongoose.model("product", productSchema);

export default Product;