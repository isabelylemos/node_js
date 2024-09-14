const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.render("index");
});


// rota clientes
app.get("/clientes", (req, res) => {
  const listaClientes = [
    { nome: "Isabely", cpf: "123.456.789-10", endereco: "Av. Interlagos, 79" },
    { nome: "Yasmin", cpf: "132.654.879-11", endereco: "Pacarai, 50" },
    { nome: "Ana Flávia", cpf: "555.444.777-10", endereco: "Av. Barcelona, 41" },
    { nome: "Gustavo", cpf: "111.452.777-12", endereco: "Carnaúba, 32" },
  ];

  res.render("clientes", {
    listaClientes: listaClientes,
  });
});


// rota produtos
app.get("/produtos", (req, res) => {
  const listaProdutos = [
    { nome: "Pizza de Quatro Queijos", preco: 50, categoria: "Grande" },
    { nome: "Pizza de Calabresa", preco: 35, categoria: "Pequena" },
    { nome: "Pizza de Marguerita", preco: 48, categoria: "Grande" },
    { nome: "Pizza de Portuguesa", preco: 50, categoria: "Grande" },
  ];

  res.render("produtos", {
    listaProdutos: listaProdutos,
  });
});


// rota pedidos
app.get("/pedidos", (req, res) => {
  
  const listaPedidos = [
    {numero: 1, valor: 85},
    {numero: 2, valor: 98},
    {numero: 3, valor: 50},
    {numero: 4, valor: 83}
  ];

  res.render("pedidos", {
    listaPedidos : listaPedidos
  })
});


const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
