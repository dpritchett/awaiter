const handler = require('./lib/handler.js')

const http = require('http')
const { PORT = 3000 } = process.env

http.createServer(handler.handler).listen(PORT)
