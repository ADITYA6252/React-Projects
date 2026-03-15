import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRouter.js";
import workoutRoutes from "./routes/workoutRoutes.js";
import caloriesRoutes from "./routes/caloriesRoutes.js";
import waterRoutes from "./routes/waterRoutes.js";
import subscribeRoutes from "./routes/subscribeRoutes.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: "https://react-projects-8omk.vercel.app",
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}))
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/workout", workoutRoutes);
app.use("/api/calories", caloriesRoutes);
app.use("/api/water", waterRoutes);
app.use("/api/subscribe", subscribeRoutes);
app.get("/", (req, res) => {
  res.send("gym api running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
