//importando:comandos selecionar, criar e atualizar do arquivo DAO
import { selectSales, insertSales,  selectSales2, updadeSales, deleteSales } from '../DAO/Sales.js';

class Sales2 {
    static async selectSales(req, res) {
        try {
            let funcionaAiVai = await selectSales(req);
            res.status(202).json(funcionaAiVai)
        }
        catch (error) {
            res.status(409).json(error.messagem)
        };
    };
    static async insertSales(req, res) {
        try {
            res.status(202).json(await insertSales(req))
        }
        catch (error) {
            res.status(409).json(error.messagem)
        };
    };
    static async selectSales2(req, res) {
        try {
            res.status(202).json(await selectSales2(req))
        }
        catch (error) {
            res.status(409).json(error.messagem)
        };
    };
    static async updadeSales(req, res) {
        try {
            res.status(202).json(await updadeSales(req))
        }
        catch (error) {
            res.status(400).json(error.messagem)
        };
    };
    static async deleteSales(req, res) {
        try {
            res.status(202).json(await deleteSales(req))
        }
        catch (error) {
            res.status(409).json(error.messagem)
        };
    };
};

export default Sales2;