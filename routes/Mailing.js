const express = require('express')
const sendToMeRouter = express.Router()
const nodemailer = require('nodemailer')

console.log('Hola Funcionando')

let transporter = nodemailer.createTransport({
  host: 'c1770574.ferozo.com',
  port: 465,
  secure: true,
  auth: {
    user: 'info@elmedanoturismo.com.ar',
    pass: 'KLPFV*92lV'
  }
})

transporter.verify(function(error, success) {
  if(error) {
    console.error('Error: ', error)
  } else {
    console.log('Server is ready to take our messages!')

  }
})

sendToMeRouter.post('/', (req, res, next) => {
  var email = req.body.userEmail
  var name = req.body.userName
  var phone = req.body.userPhone
  var excursion = req.body.nameExcursion
  var cantidad = req.body.cantidad

  // var content = `Nombre: ${name} \n Email: ${email} \n Telefono: ${phone} `

  var mail = {
    from: 'El Medano Turismo <info@elmadanoturismo.com.ar>', 
    to: email, 
    subject: 'Pedido de Reserva',
    text: '',
    html:`
    <h1>Pedido de Reserva</h1>
    <ol>
      <li>Nombre y Apellido: ${name}</li>
      <li>Email: ${email} </li>
      <li>Telefono: ${phone} </li>
      <li>Excursion: ${excursion}</li>
      <li>Cantidad de Personas: ${cantidad}</li>
    </ol>
    `
  }
    transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})
 


module.exports = sendToMeRouter
