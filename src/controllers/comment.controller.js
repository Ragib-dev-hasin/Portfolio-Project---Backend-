import Comment from "../models/comment.model.js";

const commentSection = async (req, res) => {
  try {
    const { blogID, name, email, content } = req.body;

    blogID = new ObjectId(blogID);

    const result = await Comment.create(blogID, name, email, content);

    res.status(201).json({
      success: true,
      msg: "comment created successfully",
      data: result,
    });
  } catch (err) {
    res.status(404).json({ msg: err.message, Error: "Something went wrong" });
  }
};

const comments = { commentSection };

export default comments;
