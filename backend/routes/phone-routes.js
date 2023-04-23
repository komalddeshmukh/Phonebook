const express=require("express");
const router=express.Router();
const Phone= require("../model/Phone");
const phonesController=require("../controllers/phones-controller")

router.get("/",phonesController.getAllPhones);
      //this route will provide all the number.
router.post("/",phonesController.addPhone);
      //post is used to add contact inside postman body
router.get("/:id",phonesController.getById);
//add product by id of postman
router.put("/:id",phonesController.updatePhone);
//update by using id
router.delete("/:id",phonesController.deletePhone); 



module.exports=router