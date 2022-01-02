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

export default WomenProduct11
