import { openDb } from "../config/configDB.js";

// criando tabela
let salesinho = await openDb();
await salesinho.run('CREATE TABLE IF NOT EXISTS Sales (id INTEGER PRIMARY KEY NOT NULL, client VARCHAR(45), salesman VARCHAR(45), campaign VARCHAR(55), budget REAL, total REAL, date DATE, form_of_payment VARCHAR(45))');

//selecionando para poder inserir um dado depois
export async function selectSales(req) { 
  let id = req.params.id
  return salesinho.get('SELECT * FROM sales WHERE id=?', [id]);
};

// Inserindo uma nova tabela
//inserindo um novo dado
export async function insertSales(req) {
  let Sales2 = req.body
  salesinho.run('INSERT INTO Sales2(client, salesman, campaign, budget , total, date, form_of_payment) VALUES (?,?,?,?,?,?,?,?)', [Sales2.client, Sales2.salesman, Sales2.campaign, Sales2.budget, Sales2.total, Sales2.date, Sales2.form_of_payment]);
};

//Atualização de uma tabela existente
// All seleciona tudo
export async function selectSales2() {
  return salesinho.all('SELECT * FROM Sales2');
};

// adiciona dados para uma tabela existente
export async function updadeSales(req) {
  let Sales2 = req.body
  let id = req.params.id
  return salesinho.run(`UPDATE Sales2 SET client=?, salesman=?, campaign=?, budget=? , total=?, date=?, form_of_payment=? WHERE id=${id}`, [Sales2.client, Sales2.salesman, Sales2.campaign, Sales2.budget, Sales2.total, Sales2.date, Sales2.form_of_payment]);
};

//Deletando um dado
export async function deleteSales(req) {
  let id = req.params.id
  salesinho.get('DELETE FROM Sales2 WHERE id=?', [id]);
  return {
    id: id,  "message": "Delete accepted huh, no return! "
  };
};