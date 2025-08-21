import mongoose from "mongoose";

const roadRuleSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
});

export default mongoose.model("RoadRule", roadRuleSchema);
