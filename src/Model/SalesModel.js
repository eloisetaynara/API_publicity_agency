import { inserSales, updadeSales, selectSales, selectSales2, deletSales } from '../DAO/Sales.js';

class Sales2 {
    static async selectSales(req, res) {
        try {
            let funcionaAiVai  = await selectSales(req, res)
            res.status(202).json(funcionaAiVai)
        }
        catch (error) {
            res.status(409).json(error.messagem)
        }
    }
    static async inserSales(req, res) {
        try {
            res.status(202).json(inserSales)
        }
        catch (error) {
            res.status(409).json(error.messagem)
        }
    }
    static async selectSales2(req, res) {
        try {
            res.status(202).json(selectSales2)
        }
        catch (error) {
            res.status(409).json(error.messagem)
        }
    }
    static async updadeSales(req, res) {
        try {
            res.status(202).json(updadeSales)
        }
        catch (error) {
            res.status(409).json(error.messagem)
        }
    }
    static async deletSales(req, res) {
        try {
            res.status(202).json(deletSales)
        }
        catch (error) {
            res.status(409).json(error.messagem)
        }
    }
}

export default Sales2;