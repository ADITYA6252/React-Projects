import express from "express";
import { addWater, getWater } from "../controllers/WaterController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addWater);

router.get("/", protect, getWater);

export default router;
