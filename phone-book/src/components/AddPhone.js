import { FormLabel, Button, Box, TextField } from '@mui/material'
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddPhone() {
    const history=useNavigate();
    const[inputs,setInputs] = useState({
        name:" ",
        number1:" ",
        number2:" ",
    });

    const handleChange =(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }));
       
    };

    const sendRequest=async()=>{

    await axios.post("http://localhost:5000/phones",{
        name: String(inputs.name),
        number1: Number(inputs.number1),
        number2: Number(inputs.number2)
    }).then(res=>res.data);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(()=>history('/phones'))
    };
  return (
   <form onSubmit={handleSubmit}>
   <Box 
   display="flex" 
   flexDirection="column" 
   justifyContent={'center'} 
   maxWidth={400} 
   alignContent="center"
   marginLeft={"auto"}
   marginRight={"auto"}
   >

   
    <FormLabel>Name</FormLabel>
    <TextField value={inputs.name}
        onChange={handleChange}
        margin="normal" 
        fullWidth variant='outlined' 
        name="name"/>
    <FormLabel>Number1</FormLabel>
    <TextField value={inputs.number1}
        onChange={handleChange}
        margin="normal" 
        fullWidth variant='outlined' 
        name="number1"/>
    <FormLabel>Number2</FormLabel>
    <TextField value={inputs.number2}
        onChange={handleChange}
        margin="normal"  
        fullWidth variant='outlined' 
        name="number2"/>

    <Button variant="contained" type="submit" >
        Add Contact
    </Button>
    </Box>
   </form>
   
  )
};

export default AddPhone;
