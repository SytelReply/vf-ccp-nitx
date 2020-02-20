const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 8887

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.listen(port, () => {
 console.log('JSON Server is running')
})


server.get('/', (request, response) => {
 if (request.method === 'GET') {
   response.status(200).jsonp({})
 }
})

server.get('/nitx/jsp/xquery.jsp', (request, response) => {
 if (request.method === 'GET') {
   response.status(200).jsonp({})
 }
})
