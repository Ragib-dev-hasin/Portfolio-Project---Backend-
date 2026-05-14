import express from "express";
import authcontrollers from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", authcontrollers.register);
router.post("/login", authcontrollers.login);
router.post("/logout", authcontrollers.userLogout);

export default router;
