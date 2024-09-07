import express from "express";
import db_conn from "./database/conn";
import userRoutes from "./routes/allRoutes";

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a basic route
app.use("/api", userRoutes);

// Connect to MongoDB
db_conn();

// Port to listen on
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
