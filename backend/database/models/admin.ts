// models/admin.ts
import mongoose, { Schema, Document } from "mongoose";

// Define the Admin schema
const AdminSchema: Schema = new Schema({
  role: { type: String, required: true },
  password: { type: Number, required: true }, // Consider using a hashed password for security
});

// Create the Admin model
const Admin = mongoose.model<Document>("Admin", AdminSchema, "TestAdmin");

export default Admin;
