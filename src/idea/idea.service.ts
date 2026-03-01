import { prisma } from "src/db/prisma";
import type { PostIdeaDTO } from "src/dtos/idea.dto";

export async function postIdea(idea: PostIdeaDTO) {
  return await prisma.idea.create({
    data: {
      content: idea.content,
      ideaCategories: {
        create: idea.category?.map((category) => ({
          category
        })),
      },
      ideaTags: {
        create: idea.tag?.map((tag) => ({
          tag
        }))
      }
    },
    include: {
      ideaCategories: { select: { category: true }},
      ideaTags: { select: {tag: true} },
    }
  })
}