import express, { Router } from 'express';
const app = express();
app.use(express.json());

const indexRoute = RouterIndex();

app.get('/', (req, res) => {
    res.send(" ");
});

app.post('/sales', (req, res) => {
    console.log(req.body);
    res.send({message:'Tudo ok com o GET!'});
});

// chamando porta
app.listen(3301, () =>
    console.log("Api Rodando."));