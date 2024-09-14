// IMPORTANDO O EXPRESS NA APLICAÇÃO
const express = require("express"); // CommonJS Modules

// Criando uma instancia do express
const app = express();

// definindo o EJS como renderizador de paginas
app.set("view engine", "ejs");

// definir pasta dos arquivos estaticos (public)
app.use(express.static('public'))

// Criando a rota principal
app.get("/", (req, res) => {
  // será renderizada a pagina index.ejs que está na pasta 'views'
  res.render("index");
});


// ROTA PERFIL
// :nome - parametro obrigatório
// :nome? - parametro opcional
app.get("/perfil/:nome?", (req, res) => {
  const nome = req.params.nome;
  res.render("perfil", {
    nome: nome,
  });
});


// ROTA DE VÍDEOS
app.get("/videos/:playlist?/:video?", (req, res) => {
  const video = req.params.video
  const playlist = req.params.playlist
  res.render("videos", {
    video : video,
    playlist : playlist
  });
});


// ROTA DE PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
  const listaProdutos = ["Computador", "Tablet", "Celular", "Notebook"];
  const produto = req.params.produto;
  res.render("produtos", {
    // enviando variaveis para a pagina
    // será chamada na pagina
    produto: produto, // variavel q está no index (req.params)
    listaProdutos: listaProdutos,
    //na pagina produtos.ejs havera uma testagem de condição
  });
});


// ROTA DE PEDIDOS 
app.get("/pedidos", (req, res) => {
  // ARRAY OBJETOS COM OS PEDIDOS
  const pedidos = [
    {produto: "Celular", valor: 3000},
    {produto: "Computador", valor: 4000},
    {produto: "Tablet", valor: 2000},
    {produto: "Notebook", valor: 3800},
]

  res.render("pedidos", {
    // enviando array de objetos para a pagina 
    pedidos : pedidos
  })
})


// Iniciando o servidor na porta 8080
const port = 8080
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});

// npm install nodemon - reinicia o servidor a cada att
// npx - executa pacotes
// npm install - instala
// npm start - rodar projeto
// : - representa parametro
