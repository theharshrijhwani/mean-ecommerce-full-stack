import Product from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
    let products = await Product.find();

    res.send(products.map(p => p.toObject()))
}

export const getProductById = async (req, res) => {
    const { id } = req.params;
    let product = await Product.findById(id);

    res.send(product.toObject())
}

export const addProduct = async (req, res) => {
    let data = req.body;
    let product = new Product({
        ...data
    });
    await product.save();

    res.send(product.toObject())
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    let data = req.body;
    await Product.findByIdAndUpdate(id, data);

    res.send({ message: "updated" })
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);

    res.send({ message: "deleted" })
}