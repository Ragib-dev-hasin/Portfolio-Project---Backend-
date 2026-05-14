import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGOURI);

    console.log(
      `MongoDB connect successfully at ${connect.connection.host} and ${connect.connection.name}`,
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default connectDB;
