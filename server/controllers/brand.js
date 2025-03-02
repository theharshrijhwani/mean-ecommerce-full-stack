import Brand from "../models/brandModel.js";

export const getBrands = async (req, res) => {
    let brands = await Brand.find();

    res.send(brands.map((b) => b.toObject()))
}

export const getBrandById = async (req, res) => {
    const { id } = req.params;
    let brand = await Brand.findById(id);

    res.send(brand.toObject())
}

export const addBrand = async (req, res) => {
    let brand = new Brand({
        name: req.body.name
    });

    brand.save();

    res.send(brand.toObject())
}

export const updateBrand = async (req, res) => {
    const { id } = req.params;

    await Brand.findByIdAndUpdate(id, {
        name: req.body.name
    });

    res.send({ message: "updated" })
}

export const deleteBrand = async (req, res) => {
    const { id } = req.params;
    await Brand.findByIdAndDelete(id);

    res.send({ message: "deleted" })
}