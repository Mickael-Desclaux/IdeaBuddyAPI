import { mistral, type MistralLanguageModelOptions } from '@ai-sdk/mistral';
import { generateText } from 'ai';
import { NextFunction, Request, Response } from 'express';

const model = mistral('mistral-large-latest');

export async function testAIResponse(_req: Request, res: Response, next: NextFunction) {
  try {
    const response = await generateText({
      model,
      prompt: "Comment faire une tarte aux pommes?",
      providerOptions: {
        mistral: {
          safePrompt: true,
          parallelToolCalls: false,
        } satisfies MistralLanguageModelOptions,
      },
    });

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}
