import { Router } from "express";
import { testAIResponse } from "../ai-test/chat.controller";
import { validateBody } from "src/middlewares/validate.middleware";
import { InputDTOSchema } from "src/dtos/input.dto";

const router = Router();

router.post("/", validateBody(InputDTOSchema), testAIResponse);

export { router as ChatRouter }