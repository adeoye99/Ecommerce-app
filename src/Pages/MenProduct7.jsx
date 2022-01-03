import React from 'react';
import ProductSlider from "../Productslidercomponent/ProductSlider";
import  Menproductdata7 from '../Data/Menproductslidedata/Menproductslide7';
import "./womenProduct1.css";
import Mensuggestion from "../Suggestioncomponent/Mensuggestion";

function MenProduct7() {
    return (
        <div>
            <div className = "womenproduct__row">
            <ProductSlider slides = {Menproductdata7} 
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

export default MenProduct7
