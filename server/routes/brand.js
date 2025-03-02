import express from "express";

import { addBrand, deleteBrand, getBrandById, getBrands, updateBrand } from "../controllers/brand.js";

const router = express.Router();

router.get("/", getBrands);
router.get("/:id", getBrandById);
router.post("/add", addBrand);
router.put("/:id", updateBrand);
router.delete("/:id", deleteBrand);

export default router;