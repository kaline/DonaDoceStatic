const express = require('express')
const app = express()
var bodyParser= require('body-parser');
var fs = require('fs')



app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())
app.use((err, req, res, next)=>{
    if(err){
        console.log('Dados inválidos')
        res.send('dados inválidos ' + req.body)
    }else{
        next()

    }
})
app.get('/', (req, res) =>{
    console.log('mensagem enviada')

})

app.post('/submit', (req,res)=>{
    var clienteData = JSON.stringify(req.body);
    console.log('Dados do cliente:' + JSON.stringify(req.body))
    //res.redirect('/')
    res.send('Seu pedido será entregue..' + clienteData)

fs.readFile('data.json', 'utf8', function(err){
    fs.writeFile('clienteData.json', clienteData, function(){
    
    })
})

})

app.listen(3000, function(Port){
    Port = 3000;
    console.log('Port: '+ Port)

})