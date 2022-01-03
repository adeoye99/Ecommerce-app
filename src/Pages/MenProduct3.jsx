import React from 'react';
import ProductSlider from "../Productslidercomponent/ProductSlider";
import  Menproductdata3 from '../Data/Menproductslidedata/Menproductslide3';
import "./womenProduct1.css";
import Mensuggestion from "../Suggestioncomponent/Mensuggestion";
function MenProduct3() {
    return (
        <div>
            <div className = "womenproduct__row">
            <ProductSlider slides={Menproductdata3} 
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

export default MenProduct3
