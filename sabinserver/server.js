const express= require('express');

const app= express();
const data= require('./data.json')

app.get('/',(req,res)=>{
res.status(200).send("server data");
})
app.get('/sabin',(req,res)=>{
    res.send("data sent from sabin path");
})
app.get('/data',(req,res)=>{
res.json({data})
})

app.listen(4000);