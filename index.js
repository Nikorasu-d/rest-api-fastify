// Instance dotenv for process.env variables
const dotenv = require("dotenv")
dotenv.config()

//Configure port
const port = process.env.PORT || 3000;
const host = ("RENDER" in process.env) ? `0.0.0.0` : `localhost`;

// Instance app
const app = require('fastify')({
  logger: true
})

//Declare Routes
const v1todosRoutes = require("./src/routes/v1/commonroutes")

//Register API Routes
app.register(v1todosRoutes, {prefix : "/api/v1"})

//This is just a Hello World
app.get('/', async (request, reply) => {
  console.clear()
  console.log("Accessing Home API Page")
  return reply.send("Hello World from app")
})

//Run web service
const start = async () => {
  try {
    await app.listen({host: host, port: port})
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()