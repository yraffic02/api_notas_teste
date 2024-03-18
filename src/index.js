const express = require('express');
const router = require('./routes');
const app = express();

const port = process.env.PORT_API || 3333
app.use(express.json())
app.use(router)

app.listen(port, ()=>{
    console.log('servidor rodando na porta:', port)
})