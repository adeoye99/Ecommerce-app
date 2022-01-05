import React from 'react';
import ProductSlider from "../Productslidercomponent/ProductSlider"
import Productdata4 from '../Data/ProductSlidedata/Productsliderdata4';
import "./womenProduct1.css";
import Suggestion from "../Suggestioncomponent/Suggestion"


function WomenProduct4() {
    return (
        <div>
             <div className = "womenproduct__row">
            <ProductSlider slides = {Productdata4} 
            title = "Hooded Anorak" 
            description ="Blue and Ecru Technical Taffeta Jacquard with Dior Oblique Motif"
            price ="$39.63"
            />
            <hr/>
            <Suggestion className= "suggestion"/>
           </div>
            
        </div>
    )
}

export default WomenProduct4;
