import React from 'react';
import ProductSlider from "../Productslidercomponent/ProductSlider";
import Menproductdata6 from '../Data/Menproductslidedata/Menproductslide6';
import "./womenProduct1.css";
import Mensuggestion from "../Suggestioncomponent/Mensuggestion";

function MenProduct6() {
    return (
        <div>
            <div className = "womenproduct__row">
            <ProductSlider slides = {Menproductdata6} 
            title = "DIOR AND DESCENTE HOODED DOWN JACKET" 
            description ="Black Technical Canvas"
            price ="$50.45"
            />
            <hr/>
            <Mensuggestion className= "suggestion"/>
           </div>

               
        </div>
    )
}

export default MenProduct6
