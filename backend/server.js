const express = require('express')
const app = express();
const PORT = 4578
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://halfduplex001:M8aGFTFZOV3W9nvD@cluster0.u92xgk6.mongodb.net/")
.then (()=>{console.log("MongoDB connected succussfully")})
.catch((err)=>{console.log(err)})

app.get('/', (req,res)=>{
    res.send('welcome')

})

app.get('/about',(req,res)=>{
    res.send('open')
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)

});