import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  exercise: {
    type: String,
    required: true,
  },

  sets: {
    type: Number,
    required: true,
  },

  reps: {
    type: Number,
    required: true,
  },

  duration: {
    type: Number,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

export default Workout;
