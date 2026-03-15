import express from "express"
import {addCalories,getCalories} from "../controllers/caloriesController.js"
import protect from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/",protect,addCalories)

router.get("/",protect,getCalories)

export default router