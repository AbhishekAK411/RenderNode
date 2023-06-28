import express from "express";
import { ping } from "../controllers/health.js";
import { encode } from "../controllers/encode.js";
import { register } from "../controllers/userController.js";

const router = express.Router();

router.get("/ping", ping);
router.get("/urlencoded", encode);
router.post("/register", register);
export default router;