import React from 'react'
import ProductSlider from "../Productslidercomponent/ProductSlider"
import Productdata8 from '../Data/ProductSlidedata/Productsliderdata8';
import "./womenProduct1.css";
import Suggestion from "../Suggestioncomponent/Suggestion"



function WomenProduct8() {
    return (
        <div>
             <div className = "womenproduct__row">
            <ProductSlider slides = {Productdata8} 
            title = "Diralps Cropped Down Jacket" 
            description ="Gold-Tone Quilted Technical Fabric with Dior Etoile Motif"
            price ="$30.88"
            />
            <hr/>
            <Suggestion className= "suggestion"/>
           </div>
            
        </div>
    )
}

export default WomenProduct8
