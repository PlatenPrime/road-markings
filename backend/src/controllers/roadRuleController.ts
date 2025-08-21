import { Request, Response } from "express";
import RoadRule from "../models/RoadRule";

export const getAllRoadRules = async (_req: Request, res: Response) => {
  const rules = await RoadRule.find();
  res.json(rules);
};

export const createRoadRule = async (req: Request, res: Response) => {
  const { title, description, imageUrl } = req.body || {};
  if (!title) return res.status(400).json({ message: "Title is required" });
  const rule = await RoadRule.create({ title, description, imageUrl });
  res.status(201).json(rule);
};

export const updateRoadRule = async (req: Request, res: Response) => {
  const rule = await RoadRule.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!rule) return res.status(404).json({ message: "Not Found" });
  res.json(rule);
};

export const deleteRoadRule = async (req: Request, res: Response) => {
  await RoadRule.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
