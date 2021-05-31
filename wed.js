const { Console } = require('console');
const express = require('express')
const app = express()
app.get('/',(rep,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})
app.get('/minhp',(rep,res)=>{
    res.sendFile(__dirname + '/public/minhp/index.html');
})

const POST =3000;
app.listen(process.POST || POST);
console.log('sever is running')