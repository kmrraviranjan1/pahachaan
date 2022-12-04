const express = require('express')
const dotenv = require('dotenv')
const dbConnect = require('./src/config/db')
const userRouter = require('./src/controllers/user.controller');
const messageRouter = require('./src/controllers/message.controller')

dotenv.config()

const app = express()
app.use(express.json())

// Endpoints
app.use('/users', userRouter)
app.use('/message', messageRouter)

app.listen(process.env.PORT || 5432, async () => {
    await dbConnect()
    console.log("pehchann server running on port ", process.env.PORT || 5432)
})