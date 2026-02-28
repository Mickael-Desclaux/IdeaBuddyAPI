import { Request, Response } from "express"
import "dotenv/config"
import express from 'express'
import { ChatRouter } from "./routes/chat.route"
import { errorHandler } from "./middlewares/error.middleware"

const app = express()
const port = 3000
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use("/ai", ChatRouter)

app.use(errorHandler)

app.listen(port, () => console.log(`✅ Server is running on port ${port}`));
