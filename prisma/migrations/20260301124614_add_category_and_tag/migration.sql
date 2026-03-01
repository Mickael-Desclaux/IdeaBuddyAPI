-- CreateTable
CREATE TABLE "IdeaCategory" (
    "idea_id" INTEGER NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "IdeaCategory_pkey" PRIMARY KEY ("idea_id","category")
);

-- CreateTable
CREATE TABLE "IdeaTag" (
    "idea_id" INTEGER NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "IdeaTag_pkey" PRIMARY KEY ("idea_id","tag")
);

-- AddForeignKey
ALTER TABLE "IdeaCategory" ADD CONSTRAINT "IdeaCategory_idea_id_fkey" FOREIGN KEY ("idea_id") REFERENCES "Idea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IdeaTag" ADD CONSTRAINT "IdeaTag_idea_id_fkey" FOREIGN KEY ("idea_id") REFERENCES "Idea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
