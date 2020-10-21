const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const path = require('path')
const router = express.Router()

app.use('/sendtome', require('./routes/Mailing'))
// app.use('/public', express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))