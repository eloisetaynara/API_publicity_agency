# Projeto Final de módulo 04 
Tema base Agência de publicidade

## Desenvolvimento de API Rest
Ambiente NodeJS utilizando framework web

## Descrição
API construída como de estudo, usando banco de dados não relacional SQLite3, seguindo o padrão de organização MVC, com possibilidade de aplicações Web, como softwares e sites, consistindo em um protocolo sobre a Arquitetura da Informação. 

## Ferramentas utilizadas
JavaScript
NodeJS 16.13.1 LTS
Framework Express
SQLite

## OBS para rodar a API
Basta dar o comando <b>npm start <b> ou <b>npm run dev<b>

## Todas a dependências utilizadas
```
"dependencies": {
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "nodemon": "^1.10.2",
    "sqlite": "^4.0.23",
    "sqlite3": "^5.0.2"
  }
  ```
  Este trecho pode ser encontrado dentro do arquivo <b>packge.json<b>

## verbos HTTP e CRUD
Os <b>verbos HTTP<b> vão indicar qual ação está sendo requisitada pelo consumidor do serviço.

<b>CRUD<b>
São as iniciais de das palavras em inglês Create, Read, Update, and Delete.

## Exemplo de aplicação {
    "id": 2,
    "client": "Roy Mustang",
    "salesman": "Lucas Teles",
    "campaign": "Fullmetal Alchemist",
    "budget": 1000,
    "total": 1500,
    "date": "16/10/2021",
    "form_of_payment": "Crédito"
  }
## Rotas de vizualização

GET + id: visualiza os dados de um cadastro especifico daquele determinado número de id.

GET + Sales: Apresenta todos os cadastros efetuados.

POST + Sales: Inseri uma nova linha de dados.

UPDATE + id: Atualizada o cadastro do id especificado.

DELETE + id: Deleta o dado do id em especificado.

