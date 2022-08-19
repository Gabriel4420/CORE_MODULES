const http = require('http')
const url = require('url')
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res) => {
  fs.readFile('mensagem.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset:utf8' })
    res.write(data)
    return res.end()
  })
})

server.listen(port, () => console.log(`Server running on ${port}`))
