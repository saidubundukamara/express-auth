import express from 'express'
import 'dotenv/config'
import authController from './routes/api/auth'
import userController from './routes/api/user'

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const BaseUrl = '/api/v1';

app.use(`${BaseUrl}/auth`, authController)
app.use(`${BaseUrl}/user`, userController)

app.listen(PORT, () =>  console.log(`Server is running at http://localhost:${PORT}`))