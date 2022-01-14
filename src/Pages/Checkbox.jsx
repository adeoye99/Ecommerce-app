import React from 'react'
import { FaBasketballBall } from 'react-icons/fa';
import { useStateValue } from "../LoginComponents/StateProvider";
import "./Mylist.css";
import Mylistmovies from "./Mylistmovies";
import "./Mylist.css";
import {Link} from 'react-router-dom';


function Checkbox() {
    const [{ mylist }] = useStateValue()
    return (
        <div>
            {mylist?.length === 0 ? 
	        (<div>
		      <h2 className="mycart__title">Your cart is empty</h2>
	         </div>
			 ):(
	        	<div>
		        	<div>
		               	<h2 className = "mycart__title">Your shopping Cart</h2>
			       </div>
		            <div className ="mycart__movies">
			            {mylist.map(item => 
			            <Checkoutproduct
			                id = {item.id}
			               img = {item.src}
			               alt = {item.alt}
			               price = {item.price}
			               title = {item.title}
			              />)}
	            	</div>
	             </div>
	   )}</div>
	   )
}

export default Checkbox;
