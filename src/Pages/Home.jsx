import React from 'react';
import Background from '../Background/Background';
import {Link} from "react-router-dom";
import Footer from "../Footercomponent/Footer"
import "./Home.css";
import Men from "../Pages/Men";
import Hero from "../HeroComponent/Hero";
import SlideDatas from "../Data/Slidedata";

function Home() {
    return (
        <div>  
            <Hero slides={SlideDatas}/> 
        </div>

    )
}

export default Home;
