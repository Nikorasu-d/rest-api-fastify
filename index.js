//Imports
import Fastify from 'fastify'
import {routes as routesV2} from './routes/v2/commonroutes.js'
import {PORT, RENDER} from './config/env.js'

// Instance Fastify Web Service
const app = Fastify({logger : true})

//Configure Port and Host
const port = PORT || 3000;
const host = RENDER !== undefined? `0.0.0.0` : `localhost`;

//Register API Routes
app.register(routesV2, {prefix : "/api/v2"})

//This is just a Hello World
app.get('/', async (request, reply) => {
  return reply.type('text/html').send(`<h1 style="text-align:center; font-family: Helvetica">Hello World</h1>`)
})

//Start Web Service Function
const start = async () => {
  try {
    await app.listen({host: host, port: port})
    console.log(`Web Service deployed on ${host}:${port}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

//Run
start()