import React, {useEffect, useState}from 'react';
import axios from 'axios';
import Phone from './Phone';
import "./Phone.css"


const URL="https://phone-book-erf4.onrender.com/phones";

const fetchHandler=async()=>{
    return await axios.get(URL).then((res)=>res.data)
};
function Phones(){ 
    const[phones,setPhones]=useState();
    useEffect(()=>{

            fetchHandler().then(data=>setPhones(data.phones))

    }, []);
    console.log(phones);
  return (
    <div>
      <ol>
        {phones && phones.map((phone,i)=>(
            <li className='phone' key={i}>
                <Phone phone={phone}/>
            </li>
        ))}
      </ol>
    </div>
  )
};

export default Phones;
