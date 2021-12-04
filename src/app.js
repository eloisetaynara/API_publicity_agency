import express from 'express'

const PORT = process.env.PORT || 3003
const app = express()
app.use(express.json())

import router from './Routes/SalesControll.js'
app.use(router)

app.listen(PORT, () => console.log('API working'));