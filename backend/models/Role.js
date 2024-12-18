// models/User.js
import mongoose from "mongoose";

const Role = new mongoose.Schema(
  {
 
    value: {
      type: String,
      unique: true,
      default: 'user', // 'user' или 'admin'
    },
  }
);

export default mongoose.model("Role", Role);
