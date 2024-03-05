import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema(
  {
    userName: { type: String, require: true },
    userEmail: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);
const usersModels =
  mongoose.models.usersModels || mongoose.model("usersModels", usersSchema);
export default usersModels;
