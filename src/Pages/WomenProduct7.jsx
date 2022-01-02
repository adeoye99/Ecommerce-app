import React from 'react'
import ProductSlider from "../Productslidercomponent/ProductSlider"
import Productdata7 from '../Data/ProductSlidedata/Productsliderdata7';
import "./womenProduct1.css";
import Suggestion from "../Suggestioncomponent/Suggestion"



function womenProduct7() {
    return (
        <div>
             <div className = "womenproduct__row">
            <ProductSlider slides = {Productdata7} 
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

export default womenProduct7
