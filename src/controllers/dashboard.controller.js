import User from "../models/user.model.js";
import Blog from "../models/blog.model.js";
import Experience from "../models/experience.model.js";

const dashboard = async (req, res) => {
  try {
    const email = req.headers.email;

    const user = await User.aggregate([{ $match: { email } }]);

    const experience = await Experience.aggregate([
      {
        $match: {
          createdAt: { $lte: new Date("2026-05-15T05:41:56.312+00:00") },
        },
      },

      {
        $facet: {
          total: [{ $count: "count" }],
          data: [{ $project: { _id: 0, title: 1 } }],
        },
      },
    ]);

    res.status(200).json({
      success: true,
      msg: "Data fetch successfull",
      User: user,
      Experience: {
        count: experience[0]?.total[0]?.count,
        data: experience[0]?.data ?? [],
      },
    });
  } catch (err) {
    res.status(401).json({ msg: err.message });
  }
};

export default dashboard;
