import express from "express";
import dashboard from "../controllers/dashboard.controller.js";
import validateuser from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/create", validateuser, dashboard);

export default router;
