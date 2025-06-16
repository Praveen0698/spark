import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  companyName: String,
  colorPicker: String,
  colorText: String,
  address: String,
  file: String, // saved filename
});

export const UserModel =
  mongoose.models.User || mongoose.model("User", UserSchema);
