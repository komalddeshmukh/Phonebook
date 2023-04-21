const express=require('express');
const mongoose= require('mongoose');
const router=require("./routes/phone-routes");
const app= express();

app.use(express.json());

app.use('/Phones', router);

mongoose
.connect("mongodb+srv://admin:oeiKeUfm7MfIBgzZ@cluster0.taumwbw.mongodb.net/phoneStore?retryWrites=true&w=majority")
.then(()=>console.log("connect to database"))
.then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err));


