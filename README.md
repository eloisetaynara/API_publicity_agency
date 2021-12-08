# API_publicity_agency
### Projeto Final de módulo 04 
_Tema base Agência de publicidade_
- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - - - - -
### Desenvolvimento de API Rest
_Ambiente NodeJS utilizando framework web_
- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - - - - -
### Descrição
_O objetivo do estudo, foi criar uma API usando banco de dados não relacional SQLite3, seguindo o padrão de organização MVC, com possibilidade de aplicações Web, como softwares e sites, consistindo em um protocolo sobre a Arquitetura da Informação._

## Desenvolvimento de API Rest
Ambiente NodeJS utilizando framework web

## Descrição
API construída como objeto de estudo, usando banco de dados não relacional SQLite3, seguindo o padrão de organização MVC, com possibilidade de aplicações Web, como softwares e sites, consistindo em um protocolo sobre a Arquitetura da Informação. 

## Ferramentas utilizadas
JavaScript
NodeJS 16.13.1 LTS
Framework Express
SQLite

## OBS para rodar a API
Basta dar o comando <b>npm start<b> ou <b>npm run dev<b>

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
  Este trecho pode ser encontrado dentro do arquivo _packge.json_
- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - - - - -

Os _verbos HTTP_ vão indicar qual ação está sendo requisitada pelo consumidor do serviço.

_CRUD_
São as iniciais das palavras em inglês Create, Read, Update, and Delete.
- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - - - - -
### Exemplo de aplicação
    {
    "ID": 1,
    "CLIENT": "Akane Yanagi",
    "SALESMAN": "Carol",
    "CAMPAIGN": "T-shirt workshop",
    "BUDGET": 1399,
    "TOTAL": 1405,
    "DATE": "21/12/2010",
    "FORM_OF_PAYMENT": "Dinheiro"
  }
### Rotas de vizualização
- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - - - - -
_GET_ + _id_: visualiza os dados de um cadastro especifico daquele determinado número de id. 
_GET_ + _Sales_: Apresenta todos os cadastros efetuados.                                     
_POST_ + _Sales_: Serve para adicionar uma nova linha de dados.                                            
_UPDATE_ + _id_: Atualizada o cadastro do id especificado.                                   
_DELETE_ + _id_: Deleta o dado do id em especificado.                                        
- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - - - - -
