import express from "express";
import db_conn from "./database/conn";
import userRoutes from "./routes/allRoutes";
import Admin from "./database/models/admin";

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
db_conn();

// Adding an admin
const newAdmin = new Admin({
  role: "admin",
  password: 123,
});
newAdmin
  .save()
  .then(() => {
    console.log("Admin created");
  })
  .catch(() => {
    console.log("Error creating admin");
  });

// Define a basic route
app.use("/api", userRoutes);

// Port to listen on
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
