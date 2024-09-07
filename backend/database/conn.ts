import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config({ path: '../.env' });

// Connect to MongoDB
let db_conn = () => {
  mongoose
    .connect(process.env.MONGO_URI || "")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
};

export default db_conn;
