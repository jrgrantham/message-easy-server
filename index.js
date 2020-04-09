const express = require('express')
const cors = require('cors')

const server = express()

server.use(cors())
server.use(express.json())


server.get( '*', handleRequest)

function handleRequest(req, res) {
  res.json('hello')
}

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log('listening on ' + port);
  
})


console.log('boom!');
