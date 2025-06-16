import connectToDatabase from "@/lib/mongodb";
import { FormModel } from "@/models/FormModel";
import nextConnect from "next-connect";

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Something went wrong: ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' not allowed` });
  },
});

apiRoute.post(async (req, res) => {
  await connectToDatabase();

  try {
    const formData = req.body;

    // Save only field data, completely ignore file fields
    const form = new FormModel({
      ...formData,
      photo: undefined,
      signOne: undefined,
      signTwo: undefined,
      addressProof: undefined,
      panCardFile: undefined,
      education: (formData.education || []).map((edu) => ({
        ...edu,
        uploadOne: undefined,
      })),
    });

    await form.save();

    res
      .status(201)
      .json({ message: "Form submitted successfully (files ignored)" });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default apiRoute;
