import { prisma } from "src/db/prisma";
import type { PostIdeaDTO } from "../dtos/idea.dto";

export async function postIdea(idea: PostIdeaDTO) {
  return await prisma.idea.create({
    data: idea
  })
}