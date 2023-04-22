import React from 'react'
import { Button } from '@mui/material';
import "./Phone.css";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';


function Phone(props) {
    const history= useNavigate()
    const{_id,name,number1,number2}=props.phone;
    const deleteHandler=()=>{
      axios.delete(`http://localhost:5000/phones/${_id}`)
      .then(res=>res.data)
      .then(()=>history("/phones"));
    }
  return (
    <div className="card">
      <h3>{name}</h3>
      <h4>{number1}</h4>
      <h4>{number2}</h4>
      <Button LinkComponent={Link} to={`/phones/${_id}`} sx={{mt:"auto"}}>Update</Button>
      <Button onClick={deleteHandler} sx={{mt:"auto"}}>Delete</Button>
    </div>
  )
};

export default Phone;
