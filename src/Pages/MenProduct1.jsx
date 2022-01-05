import React from 'react';
import ProductSlider from "../Productslidercomponent/ProductSlider";
import  Menproductdata1 from '../Data/Menproductslidedata/Menproductslide1';
import "./womenProduct1.css";
import Mensuggestion from "../Suggestioncomponent/Mensuggestion";

function menProduct1() {
    return (
        <div>
            <div className = "womenproduct__row">
            <ProductSlider slides = {Menproductdata1} 
            title = "OVERSIZED 'CHRISTIAN DIOR ATELIER' T-SHIRT GRAYWOOL" 
            description ="Navy Blue Wool and Cotton Jersey"
            price ="$20"
            />
            <hr/>
            <Mensuggestion className= "suggestion"/>
           </div>

                
        </div>
    )
}

export default menProduct1
