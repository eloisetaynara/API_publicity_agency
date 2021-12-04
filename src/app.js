import express from 'express';

const app = express();
app.use(express.json());

// Chamando porta do servidor
const PORT = process.env.PORT || 3308;

app.listen(PORT, () => console.log('API finally working, thanks!!!'));

//Importando aquivo de rotas.
import router from './Routes/SalesControll.js'; 
app.use(router);