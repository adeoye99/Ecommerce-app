import React from 'react'

function MenProduct5() {
    return (
        <div>
            <div className = "womenproduct__row">
            <ProductSlider slides = {Productdata} 
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

export default MenProduct5
