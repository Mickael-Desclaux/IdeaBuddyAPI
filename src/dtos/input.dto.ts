import z from "zod";

export const InputDTOSchema = z.object({
  input: z.string().min(1, 'Empty message').max(1000, 'Message too long')
});

export type InputDTO = z.infer<typeof InputDTOSchema>;