import mongoose from "mongoose";
import { ENV } from "./env.js";

const connectDB = async () => {
  try {
    const result = await mongoose.connect(ENV.DB_URL);
    console.log(`✅ Connected to the database: ${result.connection.host}`);
  } catch (error) {
    console.error("❌ MONGODB connection error!");
    process.exit(1); // 1 means error 0 means success
  }
};

export default connectDB;
