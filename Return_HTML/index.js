const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-type', 'text/html;charset=utf-8')

  res.end(
    '<h1>Hello,  My first Server with HTML</h1><p>Testando Atualização</p>',
  )
})

server.listen(port, () => console.log(`Server running on ${port}`))
