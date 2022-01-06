import React from 'react';
import ProductSlider from "../Productslidercomponent/ProductSlider";
import  Menproductdata8 from '../Data/Menproductslidedata/Menproductslide8';
import "./womenProduct1.css";
import Mensuggestion from "../Suggestioncomponent/Mensuggestion";

function MenProduct8() {
    return (
        <div>
            <div className = "womenproduct__row">
            <ProductSlider slides = {Menproductdata8} 
              title = "DIOR AND DESCENTE Hooded Parka" 
              description ="Black Technical Canvas"
              price ="$49.45"
            />
            <hr/>
            <Mensuggestion className= "suggestion"/>
           </div>
        </div>
    )
}

export default MenProduct8
