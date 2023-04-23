import React, { useEffect } from 'react'
import  {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';
import { FormLabel, Button, Box, TextField } from '@mui/material';
import { useState } from 'react';



function PhoneDetails(){
    const [inputs,setInputs]= useState({});
    const id=useParams().id;
    const history = useNavigate();
   
    useEffect(()=>{
     const fetchHandler=async()=>{
        await axios
        .get(`http://localhost:5000/phones/${id}`)
        .then((res)=>res.data)
        .then(data=>setInputs(data.phone));
     };
        fetchHandler()
    },[id]);

    const sendRequest = async()=>{
        await axios.put(`http://localhost:5000/phones/${id}`,{
            name: String(inputs.name),
            number1: Number(inputs.number1),
            number2: Number(inputs.number2)
        }).then(res=>res.data)
    };

    
 const handleSubmit= (e) => {
    e.preventDefault();
    sendRequest().then(()=>history("/phones"))
 };
 const handleChange=(e) =>{
    setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,

    }));
 };

return (
<div>
    {inputs && (<form onSubmit={handleSubmit}>
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
        type="number"
        margin="normal" 
        fullWidth variant='outlined' 
        
        name="number1"/>
    <FormLabel>Number2</FormLabel>
    <TextField value={inputs.number2}
    type="number"
        onChange={handleChange}
        margin="normal"  
        fullWidth variant='outlined' 
        name="number2"/>

    <Button variant="contained" type="submit" >
        Update Contact
    </Button>
    </Box>
   </form>)}
</div>
  )
}

export default PhoneDetails
