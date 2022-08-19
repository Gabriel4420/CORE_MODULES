const http = require('http')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url, true)
  const name = urlInfo.query.name
  res.statusCode = 200
  res.setHeader('Content-type', 'text/html;charset=utf-8')
  if (!name) {
    res.end(
      `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Language" content="pt-br">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Descreva seu Nome</title>
        <style>
            *{
                margin:0;
                padding:0;
                box-sizing:border-box;
                font-family:'Helvetica';
            }
            body{
                display:flex;
                flex-direction:column;    
                align-items:center;
                justify-content:center;
                width:100%;  
                height:100vh;
                background-image: radial-gradient(circle at 50% -20.71%, #e459ea 0, #c84ded 16.67%, #a544f0 33.33%, #783cf2 50%, #2538f4 66.67%, #0039f5 83.33%, #003af6 100%);
            }
            h1{
                
                font-size:25px;
                font-weight:bold;
                color:white;
                display:flex;
                align-items:center;
                justify-content:center;
            }

            form{
                display:flex;
                flex-direction:column;    
                align-items:center;
                justify-content:center;
                width:100%;      
                padding:10px;
                
            }

            form input{
                border:none;
                color:#a544f0;
                border-radius:30px;
                margin:15px;
                padding:10px;
                width:30%;
                font-weight:bold;
                font-size:20px;
            }

            form input::placeholder{
                color:#0039f5;
            }

            form input[type="submit"]{
                padding:5px;
                background-color:#0039f5;
                color:white;
                border-radius:0px;
                font-weight:bold;
                font-size:20px;
            }
        </style>
    </head>
    <body>
        <h1>Preencha o formulário</h1>
        <form method="get">
            <input type="text" name="name" placeholder="Insira seu nome"/>
            <input type="submit" value="Send"/>
        </form>
    </body>
</html>
      
     
      `,
    )
  } else {
    res.end(`
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Language" content="pt-br">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${name}</title>
        <style>
            *{
                margin:0;
                padding:0;
                box-sizing:border-box;
                font-family:'Helvetica';
            }
            body{
                display:flex;
                flex-direction:column;    
                align-items:center;
                justify-content:center;
                width:100%;  
                height:100vh;
                background-image: radial-gradient(circle at 50% -20.71%, #e459ea 0, #c84ded 16.67%, #a544f0 33.33%, #783cf2 50%, #2538f4 66.67%, #0039f5 83.33%, #003af6 100%);
            }
            h1{
                
                font-size:25px;
                font-weight:bold;
                color:white;
                display:flex;
                align-items:center;
                justify-content:center;
            }

            form{
                display:flex;
                flex-direction:column;    
                align-items:center;
                justify-content:center;
                width:100%;      
                padding:10px;
                
            }

            form input{
                border:none;
                color:#a544f0;
                border-radius:30px;
                margin:15px;
                padding:10px;
                width:30%;
                font-weight:bold;
                font-size:20px;
            }

            form input::placeholder{
                color:#0039f5;
            }

            form input[type="submit"]{
                padding:5px;
                background-color:#0039f5;
                color:white;
                border-radius:0px;
                font-weight:bold;
                font-size:20px;
            }
        </style>
    </head>
    <body>
    <h1>Seja Bem Vindo ${name}</h1>
    
    </body>
</html>
 
`)
  }
})

server.listen(port, () => console.log(`Server running on ${port}`))
