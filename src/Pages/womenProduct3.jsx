import React from 'react'
import ProductSlider from "../Productslidercomponent/ProductSlider"
import Productdata3 from '../Data/ProductSlidedata/Productsliderdata3';
import "./womenProduct1.css";
import Suggestion from "../Suggestioncomponent/Suggestion";

function WomenProduct3() {
    return (
        <div>
             <div className = "womenproduct__row">
            <ProductSlider slides = {Productdata3} 
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

export default WomenProduct3
