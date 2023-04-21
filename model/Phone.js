const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const phoneSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    number1:{
        type:Number,
        required:true
    },
    number2:{
        type:Number,
        
    }
});

module.exports =mongoose.model("Phone",phoneSchema);
//in mongodb phone store as phones 