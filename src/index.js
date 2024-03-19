require("dotenv").config()
const express = require('express');
const cors = require('cors');
const router = require('./routes');
const app = express();

const port = process.env.PORT_API || 3333

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port, ()=>{
    console.log('servidor rodando na porta:', port)
})