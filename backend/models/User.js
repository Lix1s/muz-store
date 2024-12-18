// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    avatarUrl: String,
    roles: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role'
    }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
