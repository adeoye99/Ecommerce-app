import React from 'react'
import ProductSlider from "../Productslidercomponent/ProductSlider"
import Productdata11 from '../Data/ProductSlidedata/Productsliderdata11';
import "./womenProduct1.css";
import Suggestion from "../Suggestioncomponent/Suggestion"



function WomenProduct11() {
    return (
        <div>
             <div className = "womenproduct__row">
            <ProductSlider slides = {Productdata11} 
            title = "   LONG-COAT" 
            description ="White Double-Sided Cashmere Felt"
            price ="$80.34"
            />
            <hr/>
            <Suggestion className= "suggestion"/>
           </div>
        </div>
    )
}

export default WomenProduct11
