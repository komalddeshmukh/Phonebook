const Phone=require("../model/Phone");

const getAllPhones= async(req,res,next)=>{
    let phones;
      try{
        phones= await Phone.find();
      }catch(err){
        console.log(err);
      }

      if(!phones){
        return res.status(404).json({message:"No name found"});
      }
      return res.status(200).json({phones});
}
// const addPhone

exports.getAllPhones=getAllPhones;