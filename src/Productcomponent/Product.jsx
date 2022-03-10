import React from 'react'
import "./Product.css";
import { Link } from "react-router-dom";

function Product(props) {
    return (
        <div className = "product">
            <Link className='product__link' to = {`${props.link}`} >
              <img className = "product__img" src = {props.img}></img>
              <p className = "product__title">{props.title}</p>
              <p className = "product__price">{props.price}</p>  
            </Link>
         </div>
    )
}

export default Product;
