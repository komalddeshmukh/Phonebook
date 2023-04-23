import { Route,Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import AddPhone from "./components/AddPhone";
import Phones from "./components/Phone/Phones"
import About from "./components/Phone/About";
import PhoneDetails from "./components/Phone/PhoneDetails"

function App() {
  return (
   <React.Fragment>
    <header>
        <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}exact/>
        <Route path="/add" element={<AddPhone/>}exact/>
        <Route path="/phones" element={<Phones/>}exact/>
        <Route path="/about" element={<About/>}exact/>
        <Route path="/phones/:id" element={<PhoneDetails/>}exact/>
      </Routes>
    </main>
   </React.Fragment>
      
    
  );
}

export default App;
