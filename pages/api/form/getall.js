import connectToDatabase from "@/lib/mongodb";
import { FormModel } from "@/models/FormModel";
export default async function handler(req, res) {
  console.log("first");
  if (req.method !== "GET") return res.status(405).end();

  await connectToDatabase();

  try {
    const forms = await FormModel.find({});
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
}
