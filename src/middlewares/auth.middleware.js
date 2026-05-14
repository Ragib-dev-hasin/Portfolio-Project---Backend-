import authConfig from "../configs/auth.config.js";
import cookieParser from "cookie-parser";
const validateuser = async (req, res, next) => {
  try {
    const token = req.cookies["user-token"];
    if (!token) {
      res.json({ msg: "Invalid user" });
    }
    const result = await authConfig.decodeToken(token);

    if (!result) {
      return res.status(401).json({
        success: false,
        message: "You must login",
      });
    } else {
      ((req.headers.email = result?.email), (req.headers._id = result?._id));
      next();
    }
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

export default validateuser;
