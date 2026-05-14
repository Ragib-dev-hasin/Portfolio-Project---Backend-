import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  blogID: { type: String },

  name: { type: String },

  email: { type: String, unique: true, required: true },

  content: { type: String },
});

const Comment = model("Comment", commentSchema);

export default Comment;
