import Experience from "../models/experience.model.js";

const exControl = async (req, res) => {
  try {
    const { title, name, description, time } = req.body;

    const result = await Experience.create({ title, name, description, time });

    return res
      .status(201)
      .json({ Success: true, msg: "Data is created", result });
  } catch (err) {
    return res.status(401).json({ Success: false, msg: err.message });
  }
};

const experienceData = { exControl };

export default experienceData;
