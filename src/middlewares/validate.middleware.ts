import type { NextFunction, Request, Response } from "express";
import { type ZodType, ZodError } from "zod";

export function validateBody(schema: ZodType) {
	return (req: Request, res: Response, next: NextFunction) => {
		try {
			schema.parse(req.body);
			next();
		} catch (error) {
			if (error instanceof ZodError) {
				return res.status(400).json(
					{
						message: "Validation error",
						errors: error.issues.map((err) => ({
							path: err.path.join("."),
							message: err.message,
						})),
					},
				);
			}
			next(error);
		}
	};
}