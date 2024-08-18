import express from 'express'
import routers from './routers.js'
import cors from 'cors'


const server = express()

const port = process.env.PORT || 3000

server.use(express.json())
server.use(cors())

server.use(routers)


server.listen(port,() => console.log('server run in port: ',port,', http://localhost:'+port))