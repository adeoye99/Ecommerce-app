import React ,{ useState, useRef } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Background.css";

function Background() {
    return (
        <div className = "home">
        <div className = "home__centerpiece">
           <h1>SHOP WITH</h1>
           <h1> US </h1>
           <Link to = "/Men">
           <button className ="home__menbutton" type ="submit">SHOP FOR MEN</button> 
           </Link>
           <Link to ="/Women">
             <button className = "home__womenbutton"type = "submit">SHOP FOR WOMEN</button>
           </Link>
       </div>
   </div>
    )
}
export default Background
