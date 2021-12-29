import React from 'react';
import ProductSlider from "../Productslidercomponent/ProductSlider"
import Productdata from '../Data/Productslidedata';
import "./womenProduct1.css";
import Button from "../Button";
import Hero from "../HeroComponent/Hero";
import SlideDatas from "../Data/Slidedata";

function WomenProduct1() {
    return (
        <div className='women__product1'>
          <ProductSlider slides = {Productdata}/>
        </div>
        )
    }
          
export default WomenProduct1;



