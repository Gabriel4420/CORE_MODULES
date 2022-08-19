const fs = require('fs')

fs.unlink('arquivo.txt', (err) =>
  err ? console.log(err) : console.log('arquivo removido'),
)
