import React from 'react'
import ProductSlider from "../Productslidercomponent/ProductSlider"
import Productdata10 from '../Data/ProductSlidedata/Productsliderdata10';
import "./womenProduct1.css";
import Suggestion from "../Suggestioncomponent/Suggestion"



function WomenProduct10() {
    return (
        <div>
             <div className = "womenproduct__row">
            <ProductSlider slides = {Productdata10} 
            title = "Reversible Blouson" 
            description ="Beige Multicolor Mizza Quuilted Technical Fabric"
            price ="$50.66"
            />
            <hr/>
            <Suggestion className= "suggestion"/>
           </div>
            
        </div>
    )
}

export default WomenProduct10;
