import connectToDatabase from "@/lib/mongodb";
import { UserModel } from "@/models/UserModel";

export default async function handler(req, res) {
  console.log("first");
  if (req.method !== "GET") return res.status(405).end();

  await connectToDatabase();

  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
}
