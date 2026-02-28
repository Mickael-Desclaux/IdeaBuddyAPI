import { Router } from "express";
import { testAIResponse } from "../controllers/chat.controller";
import { validateBody } from "../middlewares/validate.middleware";
import { InputDTOSchema } from "../dtos/input.dto";

const router = Router();

router.post("/", validateBody(InputDTOSchema), testAIResponse);

export { router as ChatRouter }