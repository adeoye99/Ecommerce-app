
import React from 'react'
import Product from "../Productcomponent/Product";
import Menproduct from "../Data/MenProductData" 
import { Link } from "react-router-dom";
import "./Men.css";



function Men() {
    return (
        <div className="men">
            <h2 className ="men__title">Men's Wears</h2>
            <div className = "men__row">
                <Product
                id = "1"
                img="/Images/t-shirt.jpeg"
                price= "$49.65"
                title="Oversized 'Christian Dior Atelier' T-shirt GrayWool and Cotton Jersey"
                link="/Men/MenProduct1"
                />
                 <Product
                id = "2"
                img="/Images/t-shirt2.jpeg"
                price= "$49.65"
                title="CD Icon T-shirt Olive Cotton jersey"
                link="/Men/MenProduct2"
                />
                 <Product
                id = "3"
                img="/Images/t-shirt3.jpeg"
                price= "$39.65"
                title= "Oversized Dior Oblique T-shirt "
                link="/Men/MenProduct3"
                />
            </div>
            <div className = "men__row">
            <Product
                id = "4"
                img="/Images/jacket3.jpeg"
                />
            </div>
            <div className = "men__row">
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
            <div className = "men__row">
                <Product
                id = "8"
                img="/Images/jacket5.jpeg"
                price= "$49.65"
                title="Dior and Descente Hooded Down Jacket"
                link="/Men/MenProduct7"
                />
                 <Product
                id = "9"
                img="/Images/jacket6.jpeg"
                price= "$49.65"
                title="Dior and Descente Hooded Park"
                link="/Men/MenProduct8"
                />
            </div>
            <div className = "men__row">
            <Product
                id = "4"
                img="/Images/largeimage2.jpeg"
                />
            </div>
        </div>
    )
}

export default Men
