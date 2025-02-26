import mongoose from "mongoose";

const wishlistSchema = new mongoose.model({
    userId: { type: mongoose.Schema.ObjectId, ref: 'user' },
    productId: Array(String)
});

const Wishlist = mongoose.Model("wishlist", wishlistSchema);

export default Wishlist;