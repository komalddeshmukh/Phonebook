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
};
  const getById=async(req, res,next)=>{
    const id=req.params.id;
    let phone;
    try{
      phone=await Phone.findById(id);
    }catch(err){
      console.log(err);
    }
    if(!phone){
      return res.status(404).json({message:"No contact found"});
    }
    return res.status(200).json({phone});

  };
  const addPhone=async(req, res,next)=>{
    const {name,number1,number2}=req.body
    let phone;
    try{
      phone=new Phone({
        name,
        number1,
        number2
      });
      await phone.save();
    }catch(err){
      console.log(err);
    }
    if(!phone){
      return res.status(500).json({massage:'Unable to Add Contact Details'})
    }
    return res.status(201).json({phone})
    
  };

  const updatePhone =async(req,res,next)=>{
    const id=req.params.id;
    const {name,number1,number2}=req.body;
    let phone;
    try{
      phone=await Phone.findByIdAndUpdate(id,
        {name,number1,number2
      });
      phone = await phone.save();
    }catch(err){
      console.log(err);
    }
    if(!phone){
      return res.status(404).json({message:"Unable to update by Id"});
    }
    return res.status(200).json({message:"Contact Updated successfully"});
  };

  const deletePhone= async(req,res,next)=>{
    const id= req.params.id;
    let phone;
    try{
      phone = await Phone.findByIdAndRemove(id);
    }catch(err){
      console.log(err);
    }
    if(!phone){
      return res.status(404).json({message:"Unable to delete by Id"});
    }
    return res.status(200).json({message:"Contact Deleted successfully"});
  };




exports.getAllPhones=getAllPhones;
exports.addPhone=addPhone;
exports.getById=getById;
exports.updatePhone=updatePhone;
exports.deletePhone=deletePhone;
