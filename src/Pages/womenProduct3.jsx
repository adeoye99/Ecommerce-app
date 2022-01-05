import React from 'react'
import ProductSlider from "../Productslidercomponent/ProductSlider"
import Productdata3 from '../Data/ProductSlidedata/Productsliderdata3';
import "./womenProduct1.css";
import Suggestion from "../Suggestioncomponent/Suggestion";

function WomenProduct3() {
    return (
        <div>
             <div className = "womenproduct__row">
            <ProductSlider slides = {Productdata3} 
            title = "D-WAY WINDBREAKER" 
            description ="Gold-Tone Technical Taffeta Jacquard with Toile de Jouy Motif"
            price ="$20.45"
            />
            <hr/>
            <Suggestion className= "suggestion"/>
           </div>
        </div>
    )
}

export default WomenProduct3
