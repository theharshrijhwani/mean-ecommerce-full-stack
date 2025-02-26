import mongoose, { Schema } from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    productsId: Array(String)
});

const Cart = mongoose.model("cart", cartSchema);

export default Cart;