import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 10);
});

const User = model("User", userSchema);

export default User;
