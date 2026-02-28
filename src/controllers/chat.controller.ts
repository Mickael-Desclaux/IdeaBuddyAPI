import { mistral, type MistralLanguageModelOptions } from '@ai-sdk/mistral';
import { generateText, Output } from 'ai';
import { NextFunction, Request, Response } from 'express';
import z from 'zod';

const model = mistral('mistral-small-latest');

export async function testAIResponse(_req: Request, res: Response, next: NextFunction) {
  try {
    const response = await generateText({
      model,
      output: Output.object({
        schema: z.object({
          recipe: z.object({
            name: z.string(),
            difficulty: z.string(),
            ingredients: z.array(z.string()),
            instructions: z.array(z.string()),
            mealSuggestion: z.string(),
          })
        })
      }),
      prompt: "Comment faire une tarte aux pommes?",
      providerOptions: {
        mistral: {
          safePrompt: true,
          parallelToolCalls: false,
          strictJsonSchema: true,
        } satisfies MistralLanguageModelOptions,
      },
    });

    return res.status(200).json(response.output);
  } catch (error) {
    next(error);
  }
}
