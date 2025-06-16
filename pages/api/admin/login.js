// /pages/api/admin/login.js
import connectToDatabase from "@/lib/mongodb";

import adminModel from "@/models/adminModel";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  console.log("first");
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  await connectToDatabase();

  try {
    const user = await adminModel.findOne({ username: req.body.username });

    if (!user) {
      return res.status(401).json({ message: "failure" });
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    const inputPassword = req.body.password;

    if (originalPassword !== inputPassword) {
      return res.status(401).json({ message: "failure" });
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        userType: "admin",
      },
      process.env.JWT_SEC,
      { expiresIn: "3h" }
    );

    return res.status(200).json({ accessToken });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
