const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 8887

var xml = require('xml');

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

server.post('/nitx/jsp/xquery.jsp', (request, response) => {
 //if (request.method === 'GET') {
	 response.set('Content-Type', 'text/xml');
  response.send(xml({}));

   //response.status(200).jsonp({})
 //}
})

server.get('/nitx/api/1/topology/flowcheck/bulk', (request, response) => {
         response.set('Content-Type', 'text/json');
  response.send({});

})

