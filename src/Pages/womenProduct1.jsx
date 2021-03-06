import React from 'react';
import ProductSlider from "../Productslidercomponent/ProductSlider"
import   Productdata  from '../Data/ProductSlidedata/Productslidedata1';
import "./womenProduct1.css";
import Suggestion from "../Suggestioncomponent/Suggestion"
import ProductContent from "../Data/Productdata";
import Button from "../Button";
import Hero from "../HeroComponent/Hero";
import SlideDatas from "../Data/Slidedata";

function WomenProduct1() {
    return (
        <div className='women__product1'>
          <div className = "womenproduct__row">
            <ProductSlider slides = {Productdata} 
            title = "MID-LENGTH SKIRT" 
            description ="Navy Blue Stretch Cotton Gabardine"
            price ="$20"
            />
            <hr/>
            <Suggestion className= "suggestion"/>
           </div>
        </div>
         
        )
    }
          
export default WomenProduct1;



