import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const encode = (email, id) => {
  const payload = { email, id };

  const key = process.env.JWT_SECRET;

  const expire = process.env.JWT_EXPIRE;

  return jwt.sign(payload, key, { expiresIn: expire });
};

const decodeToken = (token) => {
  const key = process.env.JWT_SECRET;
  const decoded = jwt.verify(token, key);

  return decoded;
};
const authConfig = {
  encode,
  decodeToken,
};

export default authConfig;
