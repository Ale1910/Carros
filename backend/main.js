const express = require('express')
const app = express()

app.get('/home/*', function (req, res) {
    res.send('Teste dia 12/04/2023')
    console.log ("Testando home " +req.url) 
})
app.get('/teste', function (req, res) {
    var agora = new Date();
    res.send('Oi mundo '+agora)
})

app.use("/",express.static('frontend'))
app.listen(80)
console.log ("Servidor rodando")