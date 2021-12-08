import { openDb } from "../config/configDB.js";

// criando tabela
let db = await openDb();
await db.run('CREATE TABLE IF NOT EXISTS Sales (id INTEGER PRIMARY KEY NOT NULL, CLIENT VARCHAR(45), SALESMAN VARCHAR(45), CAMPAIGN VARCHAR(55), BUDGET NUMBER(4,2), TOTAL NUMBER(4,2), DATE DATE, FORM_OF_PAYMENT VARCHAR(45))')

//selecionando para poder inserir um dado depois
export async function selectSales(req) {
  let id = req.params.id
  return db.get('SELECT * FROM Sales WHERE ID=?', [id])
};

// Inserindo uma nova linha
//inserindo um novo dado
export async function insertSales(sales2) {
  openDb().then(db => {
    db.run('INSERT INTO Sales(CLIENT, SALESMAN, CAMPAIGN, BUDGET, TOTAL, DATE, FORM_OF_PAYMENT) VALUES (?,?,?,?,?,?,?)', [sales2.CLIENT, sales2.SALESMAN, sales2.CAMPAIGN, sales2.BUDGET, sales2.TOTAL, sales2.DATE, sales2.FORM_OF_PAYMENT]);
  })
};

//Atualização de uma tabela existente
export async function selectSales2() {
  return db.all('SELECT * FROM Sales')
};

// adiciona dados para uma tabela existente
export async function updadeSales(sales2) {
  openDb().then(db => {
    return db.run(`UPDATE Sales SET CLIENT=?, SALESMAN=?, CAMPAIGN=?, BUDGET=? , TOTAL=?, DATE=?, FORM_OF_PAYMENT=? WHERE id=${id}`, [sales2.CLIENT, sales2.SALESMAN, sales2.CAMPAIGN, sales2.BUDGET, sales2.TOTAL, sales2.DATE, sales2.FORM_OF_PAYMENT])
  });
}

//Deletando um dado
export async function deleteSales(req) {
  let id = req.params.id
  db.get('DELETE FROM Sales WHERE ID=?', [id])
  return {
    id: id, "message": "Delete accepted huh, no return! "
  };
};