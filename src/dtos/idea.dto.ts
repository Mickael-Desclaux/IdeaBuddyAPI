import z from "zod";

export const PostIdeaDTOSchema = z.object({
  content: z.string().min(1, "Idea content is empty").max(1000)
})

export type PostIdeaDTO = z.infer<typeof PostIdeaDTOSchema>;