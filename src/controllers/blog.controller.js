import Blog from "../models/blog.model.js";

const createBlog = async (req, res) => {
  try {
    const { title, catagory, discription, short_discription } = JSON.parse(
      req.body.data,
    );

    if (!req.body.data) {
      res.json({ msg: "data isnt provided" });
    }
    const img = req.file.path;

    const blog = await Blog.create({
      title,
      catagory,
      discription,
      short_discription,
      img,
    });

    res.status(200).json({
      success: true,
      msg: "Blog created successfully",
      Data: blog,
    });
  } catch (err) {
    res.status(401).json({
      error: err.message,
    });
  }
};

const findBlog = async (req, res) => {
  try {
    const blog = await Blog.find({});

    res.status(200).json({
      success: true,
      msg: "Blog fetched successfully",
      Data: blog,
    });
  } catch (err) {
    res.status(401).json({
      error: err.message,
    });
  }
};
const singleBlog = async (req, res) => {
  try {
    const id = req.params.id;

    const blog = await Blog.findById(id);

    res.status(200).json({
      success: true,
      msg: "Blog find successfully",
      Data: blog,
    });
  } catch (err) {
    res.status(401).json({
      error: err.message,
    });
  }
};
const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;

    const result = req.body;

    const blog = await Blog.findByIdAndUpdate(id, result, { new: true });

    res.status(200).json({
      success: true,
      msg: "Blog updated successfully",
      Data: blog,
    });
  } catch (err) {
    res.status(401).json({
      error: err.message,
    });
  }
};
const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;

    const blog = await Blog.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      msg: "Blog deleted successfully",
      Data: blog,
    });
  } catch (err) {
    res.status(401).json({
      error: err.message,
    });
  }
};

const blogControllers = {
  createBlog,
  findBlog,
  singleBlog,
  updateBlog,
  deleteBlog,
};

export default blogControllers;
