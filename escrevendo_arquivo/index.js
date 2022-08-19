const http = require('http')
const url = require('url')
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res) => {
  const urlInfo = require('url').parse(req.url, true)
  const name = urlInfo.query.name
  if (!name) {
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html;charset:utf8' })
      res.write(data)
      return res.end()
    })
  } else {
    fs.writeFile('users.csv', name, (err, data) => {
      res.writeHead(302, { Location: '/' })
      return res.end()
    })
  }
})

server.listen(port, () => console.log(`Server running on ${port}`))
