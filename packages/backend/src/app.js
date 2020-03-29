import { errors } from 'celebrate'
import express from 'express'
import cors from 'cors'

import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

export default app
