// models/admin.ts
import mongoose, { Schema, Document } from "mongoose";

// Define the interface for an Admin document
interface IAdmin extends Document {
  role: string;
  password: number;
}

// Define the Admin schema
const AdminSchema: Schema = new Schema({
  role: { type: String, required: true },
  password: { type: Number, required: true },
});

// Create the Admin model
const Admin = mongoose.model<IAdmin>("Admin", AdminSchema, "TestAdmin");

export default Admin;
