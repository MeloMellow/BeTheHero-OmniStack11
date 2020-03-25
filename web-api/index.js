const express = require('express');

const app = express();

app.use(express.json());

app.get('/users', (req, res)=>{
    return res.json({value: "good game"});
});

app.listen(3333, ()=>{
    console.log("rodando");
});