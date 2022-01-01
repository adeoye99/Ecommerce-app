import React from 'react';
import ProductSlider from "../Productslidercomponent/ProductSlider";
import  { Productdata2 }  from '../Data/Productslidedata';
import "./womenProduct1.css";
import Suggestion from "../Suggestioncomponent/Suggestion";


function WomenProduct2() {
    return (
        <div>
             <div className = "womenproduct__row">
            <ProductSlider 
            slides = {Productdata2} 
            title = "MID-LENGTH SKIRT WITH POCKETS" 
            description ="White and Black Under The Sea Cotton Poplin"
            price ="$38.78"
            />
            <hr/>
            <Suggestion className= "suggestion"/>
           </div>
            
        </div>
    )
}

export default WomenProduct2
