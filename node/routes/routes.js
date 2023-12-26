import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from "../controllers/BlogControllers.js"
import express from "express"

const router = express.Router()

router.get("/", getAllBlogs)
router.get("/:id", getBlog)
router.post("/", createBlog)
router.put("/:id", updateBlog)
router.delete("/:id", deleteBlog)

export default router