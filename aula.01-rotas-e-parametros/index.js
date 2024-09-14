// IMPORTANDO O EXPRESS NA APLICAÇÃO
const express = require("express"); // CommonJS Modules

// Criando uma instancia do express
const app = express();

// Criando a rota principal
app.get("/", (req, res) => {
  res.send("<h1>Hello Word!</h1><br><hr>");
});

// ROTA PERFIL
// :nome - parametro obrigatório
// :nome? - parametro opcional
app.get("/perfil/:nome?", (req, res) => {
  // coletando o parametro e guardando na variável
  const nome = req.params.nome;

  // verificando se parametro nome existe
  if (nome) {
    res.send(`Olá ${nome}! Seja bem vindo!`);
  } else {
    res.send(`<h2>Faça login para acessar o seu perfil</h2>`);
  }
});


// ROTA DE VÍDEOS
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist
  const video = req.params.video

  // verificando se playlist = true e video = undefined
  if (playlist && video == undefined){
    res.send(`<h2> Você está na playlist de ${ playlist}.</h2>`)
  }

  // verificandose os dois parametros são true
  if (playlist && video){
    res.send(`<h2>Você está na playlist de ${ playlist}</h2><br>Reproduzindo o vídeo ${video}`)
  }else{ // se nao for informado nenhum parametro
    res.send("<h1>Página de vídeos</h1>");
  }
  
});

// Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});

// npm install nodemon - reinicia o servidor a cada att
// npx - executa pacotes
// npm install - instala
// npm start - rodar projeto
// : - representa parametro
