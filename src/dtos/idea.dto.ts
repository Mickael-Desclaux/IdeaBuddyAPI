import z from "zod";

export const PostIdeaDTOSchema = z.object({
  content: z.string().min(1, "Idea content is empty").max(1000),
  category: z.array(z.string()).optional(),
  tag: z.array(z.string()).optional()
})

export type PostIdeaDTO = z.infer<typeof PostIdeaDTOSchema>;