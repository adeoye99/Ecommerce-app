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
            title = "DiorAlps Hooded" 
            description ="White Three-Tone Dior Star Quilted Technical Fabric"
            price ="$38.99"
            />
            <hr/>
            <Suggestion className= "suggestion"/>
           </div>
            
        </div>
    )
}

export default womenProduct7
