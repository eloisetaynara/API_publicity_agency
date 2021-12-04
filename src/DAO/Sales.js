import { openDb } from "../config/configDB.js";

//
// criando tabela
let salesinho = await openDb()
await salesinho.exec('CREATE TABLE IF NOT EXISTS Sales (id INTEGER PRIMARY KEY, client, salesman, campaign, budget TEXT, total, date, form_of_payment')

export async function selectSales(req) { //selecionando para poder inserir um dado depois
  let id = req.params.id
  return salesinho.get('SELECT * FROM sales WHERE id=?', [id])
};

// Inserindo uma nova tabela
export async function insertSales() {//inserindo um novo dado
  let Sales2 = req.body
  salesinho.run('INSERT INTO Sales2(client, salesman, campaign, budget , total, date, form_of_payment) VALUES (?,?,?,?,?,?,?,?)', [salesinho.client, salesinho.salesman, salesinho.campaign, salesinho.budget, salesinho.total, salesinho.date, salesinho.form_of_payment])
};
res.send({message:'Tudo ok com o GET!'});

//Atualização de uma tabela existente
export async function deletSales(req, res) {
  return salesinho.all('SELECT * FROM Sales2')// All seleciona tudo
}
export async function updadeSales(req, res) {// adiciona dados para uma tabela existente
  let Sales2 = req.body
  let id = req.params.id
  return salesinho.run(`UPDATE Sales2 SET client=?, salesman=?, campaign=?, budget=? , total=?, date=?, form_of_payment=? WHERE id=${id}`, [Sales2.client, Sales2.salesman, Sales2.campaign, Sales2.budget, Sales2.total, Sales2.date, Sales2.form_of_payment])
};

//Deletando um dado
export async function deletSales(req, res) {
  let id = req.params.id
  salesinho.get('DELETE FROM Sales2 WHERE id=?', [id])
  return {
    id: id, "statusCode": 202, "message": "Excluisão aceita heim, não tem volta!"
  };
};