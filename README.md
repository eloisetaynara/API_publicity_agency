### Projeto Final de módulo 04 
_Tema base Agência de publicidade_
- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - - - - -
### Desenvolvimento de API Rest
_Ambiente NodeJS utilizando framework web_
- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - - - - -
### Descrição
_API construída como de estudo, usando banco de dados não relacional SQLite3, seguindo o padrão de organização MVC, com possibilidade de aplicações Web, como softwares e sites, consistindo em um protocolo sobre a Arquitetura da Informação._

### Ferramentas utilizadas
_JavaScript_
_NodeJS 16.13.1 LTS_
_Framework Express_
_SQLite_
- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - - - - -
### OBS para rodar a API
_Basta dar o comando <b>npm start ou npm run dev_
- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - - - - -
### Todas a dependências utilizadas
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
São as iniciais de das palavras em inglês Create, Read, Update, and Delete.
- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - - - - -
### Exemplo de aplicação {
    "id": 2,
    "client": "Roy Mustang",
    "salesman": "Lucas Teles",
    "campaign": "Fullmetal Alchemist",
    "budget": 1000,
    "total": 1500,
    "date": "16/10/2021",
    "form_of_payment": "Crédito"
  }
### Rotas de vizualização
- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - - - - -
_GET_ + _id_: visualiza os dados de um cadastro especifico daquele determinado número de id. 
_GET_ + _Sales_: Apresenta todos os cadastros efetuados.                                     
_POST_ + _Sales_: Inseri uma nova linha de dados.                                            
_UPDATE_ + _id_: Atualizada o cadastro do id especificado.                                   
_DELETE_ + _id_: Deleta o dado do id em especificado.                                        
- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - - - - -
