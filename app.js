var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send("<html><body><h1>Home</h1></body</html>")
});
app.get('/Moda',function(req,res){
    res.send("<html><body><h1>Noticia de moda</h1></body</html>")
});
app.get('/tecnologia',function(req,res){
    res.send("<html><body><h1>Noticia de tecnologia</h1></body</html>")
});
app.listen(3000,function(){
    console.log("Servidor rodando");
});