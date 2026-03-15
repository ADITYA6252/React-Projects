import mongoose, { mongo } from "mongoose";

const caloriesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  food: {
    type: String,
    required: true,
  },

  calories: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Calories = mongoose.model("Calories", caloriesSchema);

export default Calories;
