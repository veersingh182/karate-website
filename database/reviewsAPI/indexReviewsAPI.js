const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cors = require('cors');
const reviews = require('../DB/module_Reviews');


const port = 3000;
const app = express();
app.use(cors());


const db_url = `mongodb+srv://academy113:Academy%40113@cluster0.kgqi1.mongodb.net/karateAcademy?retryWrites=true&w=majority`;

mongoose.connect(db_url,{
    useNewUrlParser: true
}).then(()=>{
    console.log("connected to database");
}).catch((error)=>{
    console.log("Error : ", error);
});

app.get('/', async (req,res)=>{
    let resultReviews = await reviews.find({ });
    console.log(resultReviews);
    res.send(resultReviews);
});

app.listen(port,()=>{
    console.log("listning to prot no : " , port);
});