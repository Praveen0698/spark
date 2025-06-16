import connectToDatabase from "@/lib/mongodb";
import { UserModel } from "@/models/UserModel";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { username, password } = req.body;
  await connectToDatabase();

  const user = await UserModel.findOne({ username });
  if (!user) return res.status(200).json("failure");

  const decrypted = CryptoJS.AES.decrypt(user.password, process.env.PASS_USER);
  const originalPassword = decrypted.toString(CryptoJS.enc.Utf8);

  if (originalPassword !== password) {
    return res.status(200).json("failure");
  }

  const accessToken = jwt.sign(
    {
      id: user._id,
      companyName: user.companyName,
      colorPicker: user.colorPicker,
      colorText: user.colorText,
      address: user.address,
      file: user.file,
      userType: "user",
    },
    process.env.JWT_SEC,
    { expiresIn: "3h" }
  );

  return res.status(200).json({ accessToken });
}
