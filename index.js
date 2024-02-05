const express = require('express');
require('dotenv').config


const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello World")
});


app.get('/twiter',(req,res)=>{
    res.send("Welcome to twiter")
})

app.get('/login',(req,res)=>{
    res.send("Welcome to login page ")
})


app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai Or Code </h2>")
})


app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`);
})