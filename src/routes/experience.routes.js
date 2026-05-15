import express from "express";
import experienceData from "../controllers/experience.controller.js";

const router = express.Router();

router.post("/create", experienceData.exControl);

export default router;
