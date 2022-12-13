import express from 'express'
import __dirname from './utils.js'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import viewsRouter from './routes/views.router.js'

const app = express()
const httpServer = app.listen(8080, () => console.log("Listening in PORT 8080"))

//Crear un servidor para sockets 
const socketServer = new Server(httpServer)

//configuramos moto de plantillas

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
//Importante para archivos de js y css en plantillas
app.use(express.static(__dirname + '/public'))
app.use('/', viewsRouter)

socketServer.on('connection', socket => {
    console.log('Nuevo cliente conectado')
})