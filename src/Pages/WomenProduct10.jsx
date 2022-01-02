import React from 'react'
import ProductSlider from "../Productslidercomponent/ProductSlider"
import Productdata10 from '../Data/ProductSlidedata/Productsliderdata10';
import "./womenProduct1.css";
import Suggestion from "../Suggestioncomponent/Suggestion"



function WomenProduct10() {
    return (
        <div>
             <div className = "womenproduct__row">
            <ProductSlider slides = {Productdata10} 
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

export default WomenProduct10;
