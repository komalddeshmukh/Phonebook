const express=require("express");
const router=express.Router();
const Phone= require("../model/Phone");
const phonesController=require("../controllers/phones-controller")

router.get("/",phonesController.getAllPhones);
      //this route will provide all the number.
      


module.exports=router;