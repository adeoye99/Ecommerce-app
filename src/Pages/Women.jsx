import React from 'react'
import Product from "../Productcomponent/Product";
import { Link } from "react-router-dom";
import Femaleproduct from "../Data/FemaleProductsData" ;
import "./Women.css";
import Footer from "../Footercomponent/Footer"



function Women() {
    return (
        <div className = "women">
            <h2>Women's wears</h2>
            <div className = "women__row">
                <Product
                id ="1"
                img= "/Images/skirt.jpeg"
                title="Mid-Length Skirt"
                price = "Navy Blue Stretch-Cotton Gabardine"
                link = "/womenProduct1"
                />
                 <Product
                id ="2"
                img= "/Images/skirt2.jpeg"
                title= "Mid-length Skirt with Pockets "
                price="WHite and Black Under the Sea Cotton Poplin"
                link = "/womenProduct2"
                />

            </div>
            
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
            <div className = "women__row">
                 <Product
                  id ="7"
                  img= "/Images/womenfashion.jpeg"
                  title="Women's Fashion"
                  />
            </div>
            <div className = "women__row">
                <Product
                id ="6"
                img= "/Images/D-way Long Windbreaker.jpeg"
                price= ""
                title="D-way Long Windbreaker"
                />
             <Product
                id ="7"
                img= "/Images/DiorAlps Hooded Anorak.jpeg"
                title =" DiorAlps Hooded Anorak"
                />
               <Product
                id ="1"
                img= "/Images/Dioralps Cropped Down Jacket.jpeg"
                price= "$49.65"
                title="Dioralps Cropped Down Jacket"
                />
            </div>
            
            <div className = "women__row">
                <Product
                id ="1"
                img= "/Images/Hooded Coat with Belt.jpeg"
                price= "$49.65"
                title="Hooded Coat with Belt"
                link = "/womenProduct5"
                />
                 <Product
                id ="1"
                img= "/Images/Reversible Blouson.jpeg"
                title ="Reversible Blouson"
                />
                 <Product
                id ="1"
                img= "/Images/Long Coat.jpeg"
                price= "$49.65"
                title="Long Coat"
                />
            </div>
           
            
        </div>
    )
}

export default Women