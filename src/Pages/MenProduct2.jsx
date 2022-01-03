import React from 'react';
import ProductSlider from "../Productslidercomponent/ProductSlider";
import  Menproductdata2 from '../Data/Menproductslidedata/Menproductslide2';
import "./womenProduct1.css";
import Mensuggestion from "../Suggestioncomponent/Mensuggestion";

function MenProduct2() {
    return (
        <div>
            <div className = "womenproduct__row">
             <ProductSlider slides = {Menproductdata2} 
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

export default MenProduct2
