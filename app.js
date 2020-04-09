const express = require('express')
const app = express()
var bodyParser= require('body-parser');
var fs = require('fs')

app.use(bodyParser.urlencoded({extended:true}))


app.post('/submit', (req,res)=> {
    var clienteData = JSON.stringify(req.body);
    console.log('Dados do cliente:' + JSON.stringify(req.body))
    //res.redirect('/')
    res.send('Seu pedido será entregue..' + clienteData)

    fs.readFile('data.json', 'utf8', function(){
        fs.writeFile('clienteData.json', clienteData, function(){
            console.log('Salva dados do cliente: clienteData.json');
        })
    })
})

app.get('/', (req, res) => {
    res.send('Seu pedido será entregue..')


})
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });