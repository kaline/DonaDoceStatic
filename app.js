const express = require('express')
const app = express()
var bodyParser= require('body-parser');
var fs = require('fs')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/app/:id', checkUserAuth); 
function checkUserAuth(req, res, next){
    if(req.session.user) return next();
    return next(new NotAuthorizeError());

}
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
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });