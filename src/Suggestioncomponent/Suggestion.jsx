import React from 'react'
import Product from "../Productcomponent/Product"

function Suggestion() {
    return (
        <div className='suggestion__title'>
            <h3>SUGGESTIONS</h3>
            <div className = "women__row">
                <Product
                id ="3"
                img= "/Images/femalejacket.jpeg"
                title= "D-Way Windbreaker"
                price="Gold-Tone Technical Taffeta Jacquard with Toile de Jouy Motif"
                link = "/ womenProduct3"
                />
               <Product
                id ="4"
                img= "/Images/Hooded Anorak.webp"
                title="Hooded Anorak"
                price= "Blue and Ecru Technical Taffeta Jacquard with Diorr Oblique Motif"
                link = "/womenProduct4"
                />
                 <Product
                id ="5"
                img= "/Images/femalecoat.jpeg"
                price= "Beige lined Technical Cotton"
                title="Trench Coat"
                link="/womenProduct5"
                />
            </div>
          

        </div>
    )
}

export default Suggestion;
