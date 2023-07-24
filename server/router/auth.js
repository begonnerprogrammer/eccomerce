const express=require("express");
const dotenv=require('dotenv');
const router =express.Router();
const app=express();
dotenv.config({path:'../config.env'});
require('../db/conn');
const User=require('../model/model');
router.get('/',(req,res)=>{
    res.send("Roiter")
})



//to get the data
router.post("/register",(req,res)=>{
    const {name,email,massage}=req.body;


const user=new User({name,email,massage});
user.save().then(()=>{
    res.status(201).json({massage:"Massage send"});
})
.catch((e)=>{console.log(e)})
})

module.exports=router;