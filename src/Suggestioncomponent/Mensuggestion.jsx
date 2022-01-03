import React from 'react'
import Product from "../Productcomponent/Product"
import "./Suggestion.css";


function Mensuggestion() {
    return (
        <div>
             <h2 className='suggestion__title'>SUGGESTIONS</h2>
             <Product
                id = "5"
                img="/Images/jacket.jpeg"
                price= "$79.65"
                title="Dior peter Doig reversible Blouson Grey Technical Wool Jacquard"
                link="/Men/MenProduct4"
                />
                 <Product
                id = "6"
                img="/Images/jacket2.jpeg"
                price= "$49.65"
                title="Dior and Peter Doig Sweater"
                link="/Men/MenProduct5"
                />
                 <Product
                id = "7"
                img="/Images/jacket4.jpeg"
                price= "$9.65"
                title="Dior and Descente Hooded Down Jacket"
                link="/Men/MenProduct6"
                />
            
        </div>
    )
}

export default Mensuggestion
