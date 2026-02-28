import { Router } from "express";
import { testAIResponse } from "../controllers/chat.controller";

const router = Router();

router.get("/", testAIResponse);

export { router as ChatRouter }