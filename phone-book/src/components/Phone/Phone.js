import React from 'react'
import { Button } from '@mui/material';
import "./Phone.css";
import {Link} from 'react-router-dom';

function Phone(props) {
    const{_id,name,number1,number2}=props.phone;

  return (
    <div className="card">
      <h3>{name}</h3>
      <h4>{number1}</h4>
      <h4>{number2}</h4>
      <Button LinkComponent={Link} to={`/phones/${_id}`} sx={{mt:"auto"}}>Update</Button>
      <Button  sx={{mt:"auto"}}>Delete</Button>
    </div>
  )
};

export default Phone;
