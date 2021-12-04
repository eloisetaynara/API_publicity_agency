import { Direction, Router } from 'express';
//import SalesModel from '../Model/SalesModel.js'

const direction = Direction();
direction.get('/', (req, res) => {
    res.send({message:'Tudo ok com o GET!'});
    
direction.post('/', (req, res) => {
});