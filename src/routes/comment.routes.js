import express from "express";
import comments from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", comments.commentSection);

export default router;
