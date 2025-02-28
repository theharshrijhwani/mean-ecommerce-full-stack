import express from "express";

import { addCategory, deleteCategory, getCategories, updateCategory } from "../controllers/category.js";

const router = express.Router();

router.get("/", getCategories)
router.post("/add", addCategory)
router.put("/:id", updateCategory)
router.delete("/:id", deleteCategory)

export default router;