import React from 'react';
import ProductSlider from "../Productslidercomponent/ProductSlider";
import  Menproductdata4 from '../Data/Menproductslidedata/Menproductslide4';
import "./womenProduct1.css";
import Mensuggestion from "../Suggestioncomponent/Mensuggestion";

function MenProduct4() {
    return (
        <div>
            <div className = "womenproduct__row">
            <ProductSlider slides = {Menproductdata4} 
            title = "MID-LENGTH SKIRT" 
            description ="Navy Blue Stretch Cotton Gabardine"
            price ="$20"
            />
            <hr/>
            <Mensuggestion className= "suggestion"/>
           </div>

            
        </div>
    )
}

export default MenProduct4
