import { Schema, model } from "mongoose";

const experienceSchema = new Schema(
  {
    title: { type: String },

    company: { type: String },

    description: { type: String },

    time: { type: String },
  },

  {
    timestamps: true,
    versionKey: false,
  },
);

const Experience = model("Experince", experienceSchema);

export default Experience;
