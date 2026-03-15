import express from "express";
import { createWorkout,getWorkoutHistory } from "../controllers/workoutController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router()

router.post("/", protect, createWorkout)
router.get("/history", protect, getWorkoutHistory)

export default router