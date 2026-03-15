import User from "../models/User.js";

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(res.user);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    user.name = req.body.name || user.name;
    user.height = req.body.height || user.height;
    user.weight = req.body.weight || user.weight;
    user.goal = req.body.goal || user.goal;

    const updatedUser = await user.sava();

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
