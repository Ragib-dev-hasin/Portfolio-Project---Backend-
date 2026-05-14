import express from "express";
import blogControllers from "../controllers/blog.controller.js";
import validateuser from "../middlewares/auth.middleware.js";
import upload from "../configs/multer.config.js";

const router = express.Router();

router.post(
  "/createBlog",
  validateuser,
  upload.single("img"),

  blogControllers.createBlog,
);
router.get("/findBlog", validateuser, blogControllers.findBlog);
router.get("/singleBlog/:id", validateuser, blogControllers.singleBlog);
router.put("/updateBlog/:id", validateuser, blogControllers.updateBlog);
router.delete("/deleteBlog/:id", validateuser, blogControllers.deleteBlog);
export default router;
