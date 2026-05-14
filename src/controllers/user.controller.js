import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import cookieParser from "cookie-parser";
import authConfig from "../configs/auth.config.js";
const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.create({ email, password });

    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: { id: user?._id, email: user?.email },
    });
  } catch (err) {
    res.status(500).json({ message: "User isnt created", err: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ msg: "Invalid - user not found" });
    }

    const match = await bcrypt.compare(password, user?.password);

    if (!match) {
      return res.json({ msg: "Password isnt matched" });
    }

    const token = await authConfig.encode(user?.email, user?._id);

    res.cookie("user-token", token);

    return res.status(200).json({ success: true, message: "Login succesfull" });
  } catch (err) {
    res.json({ msg: err.message });
  }
};

const authcontrollers = { register, login };

export default authcontrollers;
