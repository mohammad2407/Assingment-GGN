const jsonServer = require("json-server");
const { applyMiddleware } = require("redux");
const server = jsonServer.create()
const router  = jsonServer.router("./db.json");

const middlewares = jsonServer.defaults({

    static :'./build'
}
)

const port = Process.env.PORT || 5000

server.use(middlewares)
server.use(
    jsonServer.rewriter({
        "/apli/*": "/$1"
    })
);
server.use(router)
server.listen(port,() =>{
    console.log("server is running on 5000")
})