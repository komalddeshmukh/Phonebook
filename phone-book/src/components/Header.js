import React from 'react';
import { useState } from 'react';
import {AppBar, Tabs,Tab} from "@mui/material";
//import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import {NavLink} from 'react-router-dom';

function Header() {

const[value,setValue]=useState();

  return (
    <div>
    <AppBar sx={{backgroundColor:"#232F3D"}} position="sticky">
      <toolbar>
        
        <Tabs 
          sx={{ml:"auto"}}
         textColor="inherit" 
         indicatorColor="primary" 
          value={value}
          onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add Contact"/>
            <Tab LinkComponent={NavLink} to="/phones" label="Phones"/>
            <Tab LinkComponent={NavLink} to="/about" label="About Us"/>
        </Tabs>
      </toolbar>
     </AppBar>
    </div>
  );
};

export default Header
