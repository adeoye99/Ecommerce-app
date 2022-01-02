import React from 'react';
import ProductSlider from "../Productslidercomponent/ProductSlider"
import Productdata6 from '../Data/ProductSlidedata/Productsliderdata6';
import "./womenProduct1.css";
import Suggestion from "../Suggestioncomponent/Suggestion"


function WomenProduct6() {
    return (
        <div>
             <div className = "womenproduct__row">
            <ProductSlider slides = {Productdata6} 
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

export default WomenProduct6;
