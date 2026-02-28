import type { Request, Response, NextFunction } from "express";
import { postIdea } from "./idea.service";

export async function storeIdea(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await postIdea(req.body);
    return res.status(201).json(response);
  } catch(error) {
    next(error);
  }
}