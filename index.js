// Instance fastify
const fastify = require('fastify')({
  logger: true
})

//Declare Routes
const v1todosRoutes = require("./src/routes/v1/commonroutes")
//Register API Routes
fastify.register(v1todosRoutes,{prefix : "/api/v1"})


// static localhost:3000/ that prints Hola mundo
fastify.get('/', async (request, reply) => {
  console.clear()
  console.log("Accessing Home API Page")
  return reply.send("Hello World from Fastify")
})

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()