import type { Request, Response } from "express"
import "dotenv/config"
import express from 'express'
import { errorHandler } from "./middlewares/error.middleware"
import { ChatRouter } from "./ai-test/chat.route"

const app = express()
const port = 3000
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use("/ai", ChatRouter)

app.use(errorHandler)

app.listen(port, () => console.log(`✅ Server is running on port ${port}`));
