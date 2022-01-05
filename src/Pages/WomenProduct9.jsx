import React from 'react'
import ProductSlider from "../Productslidercomponent/ProductSlider"
import Productdata9 from '../Data/ProductSlidedata/Productsliderdata9';
import "./womenProduct1.css";
import Suggestion from "../Suggestioncomponent/Suggestion"



function WomenProduct9() {
    return (
        <div>
             <div className = "womenproduct__row">
            <ProductSlider slides = {Productdata9} 
            title = "COAT" 
            description ="Blue Double-Sided Wool"
            price ="$50.33"
            />
            <hr/>
            <Suggestion className= "suggestion"/>
           </div>
            
        </div>
    )
}

export default WomenProduct9;
