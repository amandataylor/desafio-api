// Importando o módulo express e criando um app.
var express = require('express'),
    app = express();

app.use(express.static('public'));

app.get('/index.html', function (req, res){
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function (req, res) {

   // Prepare output in JSON format
   response = {
       first_name:req.query.nome,
       last_name:req.query.sobrenome
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

// Informando o servidor para escutar uma porta.
app.listen(8080, 'localhost', function() {
    console.log('Servidor Express iniciado!');
});