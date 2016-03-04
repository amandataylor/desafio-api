// Importando o módulo express e criando um app.
var express = require('express'),
    app = express();

// Estabelendo uma rota. Consiste em um método HTTP, um caminho e uma função callback
// O “Ola Mundo” chama app.get() que representa o método GET do HTTP, e o caminho / representando a página raiz, seguido da função de callback.
app.get('/', function(req, res){
    res.send('Olá Mundo!');
});

// Informando o servidor para escutar uma porta.
app.listen(8080, 'localhost', function() {
    console.log('Servidor Express iniciado!');
});