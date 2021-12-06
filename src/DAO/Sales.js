import { openDb } from "../config/configDB.js";

// criando tabela
let db = await openDb();
await db.run('CREATE TABLE IF NOT EXISTS Sales (id INTEGER PRIMARY KEY NOT NULL, client VARCHAR(45), salesman VARCHAR(45), campaign VARCHAR(55), budget NUMBER(4,2), total NUMBER(4,2), date DATE, form_of_payment VARCHAR(45))')

//selecionando para poder inserir um dado depois
export async function selectSales(req) {
  let id = req.params.id
  return db.get('SELECT * FROM Sales WHERE id=?', [id])
};

// Inserindo uma nova linha
//inserindo um novo dado
export async function insertSales(sales2) {
  openDb().then(db => {
    db.run('INSERT INTO Sales(client, salesman, campaign, budget, total, date, form_of_payment) VALUES (?,?,?,?,?,?,?)', [sales2.client, sales2.salesman, sales2.campaign, sales2.budget, sales2.total, sales2.date, sales2.form_of_payment]);
  })
};

//Atualização de uma tabela existente
export async function selectSales2() {
  return db.all('SELECT * FROM Sales')
};

// adiciona dados para uma tabela existente
export async function updadeSales(sales2) {
  openDb().then(db => {
    return db.run(`UPDATE Sales SET client=?, salesman=?, campaign=?, budget=? , total=?, date=?, form_of_payment=? WHERE id=${id}`, [sales2.client, sales2.salesman, sales2.campaign, sales2.budget, sales2.total, sales2.date, sales2.form_of_payment])
  });
}

//Deletando um dado
export async function deleteSales(req) {
  let id = req.params.id
  db.get('DELETE FROM Sales WHERE id=?', [id])
  return {
    id: id, "message": "Delete accepted huh, no return! "
  };
};