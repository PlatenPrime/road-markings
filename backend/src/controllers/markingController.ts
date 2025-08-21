import { Request, Response } from "express";
import Marking from "../models/Marking";

export const getAllMarkings = async (_req: Request, res: Response) => {
  const markings = await Marking.find().populate("ruleRef").populate("author");
  res.json(markings);
};

export const createMarking = async (req: Request, res: Response) => {
  if (!req.user?.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const marking = await Marking.create({ ...req.body, author: req.user.id });
  res.json(marking);
};

export const updateMarking = async (req: Request, res: Response) => {
  const marking = await Marking.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!marking) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.json(marking);
};

export const deleteMarking = async (req: Request, res: Response) => {
  await Marking.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

export const exportGeoJSON = async (_req: Request, res: Response) => {
  const markings = await Marking.find().populate("ruleRef").populate("author");
  const geojson = {
    type: "FeatureCollection",
    features: markings.map((m: any) => ({
      type: "Feature",
      geometry: m.geometry,
      properties: {
        name: m.name,
        description: m.description,
        ruleRef: m.ruleRef?._id,
        ruleName: m.ruleRef?.title,
        author: m.author?.name,
        createdAt: m.createdAt,
        updatedAt: m.updatedAt,
      },
    })),
  } as const;
  res.json(geojson);
};
