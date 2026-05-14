import { Schema, model } from "mongoose";

const blogschema = new Schema(
  {
    title: String,
    img: String,
    catagory: String,
    discription: String,
    short_discription: String,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Blog = model("Blog", blogschema);

export default Blog;
