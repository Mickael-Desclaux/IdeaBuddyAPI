import { Request, Response } from "express"
import "dotenv/config"
import express from 'express'
import { ChatRouter } from "./routes/chat.route"

const app = express()
const port = 3000
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use("/ai", ChatRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.listen(port, () => console.log(`✅ Server is running on port ${port}`));
