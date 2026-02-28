import { Router } from "express";
import { PostIdeaDTOSchema } from "src/dtos/idea.dto";
import { validateBody } from "src/middlewares/validate.middleware";
import { storeIdea } from "./idea.controller";

const router = Router();

router.post("/", validateBody(PostIdeaDTOSchema), storeIdea);

export { router as IdeaRouter }