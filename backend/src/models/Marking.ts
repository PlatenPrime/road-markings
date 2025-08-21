import mongoose from "mongoose";

const markingSchema = new mongoose.Schema(
  {
    name: String,
    geometry: { type: Object, required: true },
    description: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    ruleRef: { type: mongoose.Schema.Types.ObjectId, ref: "RoadRule" },
  },
  { timestamps: true }
);

export default mongoose.model("Marking", markingSchema);
