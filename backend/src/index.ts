import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes";
import markingRoutes from "./routes/markingRoutes.ts";
import roadRuleRoutes from "./routes/roadRuleRoutes.ts";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "2mb" }));

const mongoUri =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/road_markings";
mongoose
  .connect(mongoUri)
  .then(() => {
    // eslint-disable-next-line no-console
    console.log("MongoDB connected");
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);
app.use("/api/markings", markingRoutes);
app.use("/api/rules", roadRuleRoutes);

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ message: "Not Found" });
});

const port = Number(process.env.PORT) || 4000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${port}`);
});
