const express = require('express')
const dotenv = require('dotenv')
const dbConnect = require('./src/config/db')

const app = express()
dotenv.config()



app.listen(process.env.PORT || 5432, async () => {
    await dbConnect()
    console.log("pehchann server running on port ", process.env.PORT || 5432)
})