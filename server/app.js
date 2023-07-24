const dotenv=require("dotenv");
const express=require("express");
const app=express();
const mongoose=require('mongoose');
dotenv.config({path:'./config.env'});
const port=process.env.PORT || 3000;
const router=require('./router/auth');
//schema
const User=require('./model/model');



//to connect to env

require("./db/conn");




//use json format for data
app.use(express.json());








//connecting to auth
app.use(router);



app.get('/',(req,res)=>{
res.send("Home")
})

app.get('/about',(req,res)=>{
    res.send("about")
    })

app.listen(port,()=>{
    console.log(`Server is on the port ${port}`);
 
})
