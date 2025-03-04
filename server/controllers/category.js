import Category from "../models/categoryModel.js";

export const getCategories = async (req, res) => {
    let categories = await Category.find();
    res.send(categories.map(c => c.toObject()))
}

export const getCategoryById = async (req, res) => {
    const { id } = req.params;
    let category = await Category.findById(id);
    res.send(category.toObject())
}

export const addCategory = async (req, res) => {
    let category = new Category({
        name: req.body.name
    });

    category.save();

    res.send(category.toObject());
}

export const updateCategory = async (req, res) => {
    // console.log(req.body);
    let name = req.body.name;
    console.log(name)
    const { id } = req.params;
    await Category.findByIdAndUpdate(id, {
        name: name
    });
    let obj = await Category.findById(id);
    console.log(obj)
    res.send(obj.toObject())
}

export const deleteCategory = async (req, res) => {
    let { id } = req.params;
    await Category.findByIdAndDelete(id);

    res.send({ message: "deleted" })
}