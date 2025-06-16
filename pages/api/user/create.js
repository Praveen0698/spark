import connectToDatabase from "@/lib/mongodb";
import { UserModel } from "@/models/UserModel";
import CryptoJS from "crypto-js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { userName, password, companyName, address } = req.body;
  await connectToDatabase();

  const existing = await UserModel.findOne({ username: userName });
  if (existing) return res.status(200).json("failure");

  const encryptedPassword = CryptoJS.AES.encrypt(
    password,
    process.env.PASS_USER
  ).toString();

  await UserModel.create({
    username: userName,
    password: encryptedPassword,
    companyName,
    address,
  });

  return res.status(200).json("success");
}
