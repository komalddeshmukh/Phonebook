const express=require('express');
const mongoose= require('mongoose');
const router=require("./routes/phone-routes");
const app= express();

app.use('/Phones', router);

mongoose.connect("mongodb+srv://admin:r1d350vk9WqzFSSt@cluster0.kwhxzva.mongodb.net/phoneStore?retryWrites=true&w=majority")
.then(()=>console.log("connect to database"))
.then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err));
