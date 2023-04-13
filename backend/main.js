const express = require('express')
const app = express()

app.get('/home/*', function (req, res) {
    res.send('Teste dia 12/04/2023')
    console.log ("Testando home " +req.url) 
})
app.get('/teste', function (req, res) {
    res.send('Oi mundo')
})
app.get('/', function (req, res) {
    res.send('Aula')
    
console.log ("Testando site " +req.url) 
})

app.listen(3000)
console.log ("Servidor rodando")