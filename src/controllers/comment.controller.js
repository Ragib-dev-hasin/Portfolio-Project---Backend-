import Comment from "../models/comment.model.js";
import { Types } from "mongoose";
const commentSection = async (req, res) => {
  try {
    let { blogID, name, email, content } = req.body;

    blogID = new Types.ObjectId(blogID);

    let result = await Comment.create({ blogID, name, email, content });

    res.status(201).json({
      success: true,
      msg: "comment created successfully",
      data: result,
    });
  } catch (err) {
    res.status(404).json({ msg: err.message, Error: "Something went wrong" });
  }
};
const findComment = async (req, res) => {
  try {
    const { id } = req.params;

    const comment = await Comment.findById(id);

    res.status(200).json({ msg: "comment find successfully", Data: comment });
  } catch (err) {
    return res.status(401).json({ msg: err.message });
  }
};
const comments = { commentSection, findComment };

export default comments;
