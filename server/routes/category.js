import express from "express";

import { addCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from "../controllers/category.js";

const router = express.Router();

router.get("/", getCategories)
router.post("/add", addCategory)
router.get("/:id", getCategoryById);
router.put("/:id", updateCategory)
router.delete("/:id", deleteCategory)

export default router;