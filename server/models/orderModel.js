import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    date: Date,
    items: Array(any),
    status: Number
});

const Order = mongoose.model("order", orderSchema);

export default Order;