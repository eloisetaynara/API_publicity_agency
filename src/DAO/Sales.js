import { openDb } from "../config/configDB.js";

// criando tabela
let db = await openDb();
await db.run('CREATE TABLE IF NOT EXISTS Sales (ID INTEGER PRIMARY KEY NOT NULL, CLIENT VARCHAR(45), SALESMAN VARCHAR(45), CAMPAIGN VARCHAR(55), BUDGET NUMBER(4,2), TOTAL NUMBER(4,2), DATE DATE, FORM_OF_PAYMENT VARCHAR(45))')

//selecionando 
export async function selectSales(req) {
  let id = req.params.id
  return db.get('SELECT * FROM Sales WHERE ID=?', [id])
};

// Inserindo uma nova linha
export async function insertSales(req) {
  let Sales2 = req.body
   await db.run('INSERT INTO Sales(CLIENT, SALESMAN, CAMPAIGN, BUDGET, TOTAL, DATE, FORM_OF_PAYMENT) VALUES (?,?,?,?,?,?,?)', [Sales2.CLIENT, Sales2.SALESMAN, Sales2.CAMPAIGN, Sales2.BUDGET, Sales2.TOTAL, Sales2.DATE, Sales2.FORM_OF_PAYMENT]);
  }

//Selecionando
export async function selectSales2() {
  return db.all('SELECT * FROM Sales')
};

// adiciona dados para uma tabela existente
export async function updadeSales(req) {
  let Sales2 = req.body
  let id = req.params.id
  await db.run(`UPDATE Sales SET (CLIENT, SALESMAN, CAMPAIGN, BUDGET, TOTAL, DATE, FORM_OF_PAYMENT) = (?, ?, ?, ?, ?, ?, ?) WHERE id = ?`, [Sales2.CLIENT, Sales2.SALESMAN, Sales2.CAMPAIGN, Sales2.BUDGET, Sales2.TOTAL, Sales2.DATE, Sales2.FORM_OF_PAYMENT, id])
};

//Deletando um dado
export async function deleteSales(req) {
  let id = req.params.id
  db.get('DELETE FROM Sales WHERE ID = ?', [id])
  return {
    id: id, "message": "Delete accepted huh, no return! "
  };
};