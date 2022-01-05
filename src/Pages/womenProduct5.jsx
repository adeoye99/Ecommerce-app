import React from 'react';
import ProductSlider from "../Productslidercomponent/ProductSlider"
import Productdata5 from '../Data/ProductSlidedata/Productsliderdata5';
import "./womenProduct1.css";
import Suggestion from "../Suggestioncomponent/Suggestion"


function WomenProduct5() {
    return (
        <div>
             <div className = "womenproduct__row">
            <ProductSlider slides = {Productdata5} 
            title = "TRENCH COAT" 
            description ="Beige lined Technical Cotton"
            price ="$50.65"
            />
            <hr/>
            <Suggestion className= "suggestion"/>
           </div>
            
        </div>
    )
}

export default WomenProduct5;
