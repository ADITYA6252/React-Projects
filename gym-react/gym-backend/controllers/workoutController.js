import Workout from "../models/Workout.js";

export const createWorkout = async (req, res) => {
  try {
    const { exercise, sets, reps, duration } = req.body;

    const workout = await Workout.create({
      user: req.user,
      exercise,
      sets,
      duration,
    });

    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getWorkoutHistory = async (req, res) => {
  try {
    const workouts = (await Workout.find({ user: req.user })).Sort({
      date: -1,
    });

    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
