const express = require("express"); 
const app = express(); 


app.get("/", function(req,res){
    res.send("<h1>Welcome to Silent Hill Shopping</h1>");
})

//rota do cadastro de produtos
app.get("/products", function(req,res){
    res.send("<h1>Lista de Produtos!</h1><ol><li>Bloody Bunny</li><li>White Claudia</li><li>Bread</li><li>Flauros</li></ol>");
})

//rota cadastro de clientes
app.get("/clients", function(req,res){
    res.send("<h1>Cadastro de Clientes!</h1><ol><li>Heather Mason</li><li>Harry Mason</li><li>Walter</li><li>Flauros</li></ol>");
})

app.get("/carrinho", function(req,res){
    res.send("<h1>Produtos selecionados para o Carrinho!</h1><ol><li>Bloody Bunny</li><li>White Claudia</li></ol>");
})

//rota com parametro 
app.get("/consulta/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno consulta:" + req.params.parametro);
})

//rota com parametro opcional
app.get("/cadastro/:nome?", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>produto " + nome + " criado!</h1>");
    }else{
        res.send("produto criado!");
    }
    
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicação na porta 4000
    if (erro){
        console.log("Pyramid Head Found You!");
    }else{
        console.log("Welcome to Silent Hill!");
    }
})
