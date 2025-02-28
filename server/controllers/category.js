import Category from "../models/categoryModel.js";

export const getCategories = async (req, res) => {
    let categories = await Category.find();
    return res.send(categories.map(c => c.toObject()))
}

export const addCategory = async (req, res) => {
    let category = new Category({
        name: req.body.name
    });

    category.save();

    res.send(category.toObject());
}

export const updateCategory = async (req, res) => {
    let model = req.body;
    const { id } = req.params;
    Category.findOneAndUpdate({ _id: id }, model);

    res.send({ message: "updated" })
}

export const deleteCategory = async (req, res) => {
    let { id } = req.params;
    await Category.findByIdAndDelete(id);

    res.send({ message: "deleted" })
}