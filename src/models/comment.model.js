import { Schema, model, Types } from "mongoose";

const commentSchema = new Schema({
  blogID: { type: Schema.Types.ObjectId },

  name: { type: String },

  email: { type: String, required: true },

  content: { type: String },
});

const Comment = model("Comment", commentSchema);

export default Comment;
