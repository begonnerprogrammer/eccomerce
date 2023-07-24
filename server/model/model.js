const mongoose=require('mongoose');


const scema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    massage:{
        type:String,
        required:true
    }
})



const  data=new mongoose.model('data',scema);
module.exports=data;