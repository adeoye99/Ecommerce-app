import React from 'react';
import ProductSlider from "../Productslidercomponent/ProductSlider"
import Productdata from '../Data/Productslidedata';
import "./womenProduct1.css";
import Suggestion from "../Suggestioncomponent/Suggestion"


function WomenProduct5() {
    return (
        <div>
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

export default WomenProduct5;
