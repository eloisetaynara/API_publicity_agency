import { Router } from "express";
import Sales2 from "../Model/SalesModel.js";

const router = Router()

router.get('/', (req, res) => {
  res.json({ " msg": "This API is clearly fine! " })
});

router.get('/Sales', (req, res) => {
  Sales2.selectSales2(req, res)
});

router.get('/Sales/:id', (req, res) => {
  Sales2.selectSales(req, res)
});

router.post('/Sales', (req, res) => {
  Sales2.insertSales(req, res)
});

router.patch('/Sales/:id', (req, res) => {
  Sales2.updateSales(req, res)
});

router.delete('/Sales/:id', (req, res) => {
  Sales2.deleteSales(req, res)
});

export default router;